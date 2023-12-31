from flask import Flask, jsonify, render_template
from flask_cors import CORS
import csv

app = Flask(__name__, static_url_path='',static_folder='../build', template_folder='../build')
CORS(app, resources={r"/*": {"origins": "*"}})

def read_csv_file(filename):
    data = []
    with open(filename, newline='', encoding='utf-8') as csvfile:
        reader = csv.reader(csvfile)
        for row in reader:
            data.append(row)
    return data

universities = read_csv_file('../src/data/Test Dataset Luxmi - RealV1 (2).csv')


def sort_universities(grade, program, budget):
    reach = []
    target = []
    safety = []
    no = []

    # Determine acceptance likelihood for each university
    for university in universities:
        acceptance_rate = determine_acceptance_rate(university, program, grade)
        if acceptance_rate > 0.5:
            safety.append(university)
        elif acceptance_rate > -0.5:
            target.append(university)
        elif acceptance_rate > -20000:
            reach.append(university)
        else:
            no.append(university)

    reach = sorted(reach, key=lambda x: x[2], reverse=True)
    target = sorted(target, key=lambda x: x[2], reverse=True)
    safety = sorted(safety, key=lambda x: x[2], reverse=True)
    our = gather_list(reach, target, safety, grade, budget)

    return reach, target, safety, our


def determine_acceptance_rate(university, program, grade):
    if program == university[1]:
        if int(university[2]) > 97:
            probability = (grade - int(university[2]))/6
        elif int(university[2]) > 94:
            probability = (grade - int(university[2]))/7
        elif int(university[2]) > 90:
            probability = (grade - int(university[2]))/8
        elif int(university[2]) > 85:
            probability = (grade - int(university[2]))/9
        elif int(university[2]) > 75:
            probability = (grade - int(university[2]))/10
        elif int(university[2]) > 50:
            probability = (grade - int(university[2]))/14
    else:
        probability = -50000
    return probability

def gather_list(reach, target, safety, grade, budget):
    ourlist = []
    spent = 0
    targetcount = 0
    safetycount = 0
    reachcount = 0
    reach = sorted(reach, key=lambda x: x[2], reverse=False)
    target = sorted(target, key=lambda x: x[2], reverse=False)
    safety = sorted(safety, key=lambda x: x[2], reverse=False)
    for university in target:
        if spent + int(university[4]) < budget:
            ourlist.append(university)
            targetcount = targetcount + 1
            spent = spent + int(university[4])
    for university in safety:
        if spent + int(university[4]) < budget and safetycount < 3: #if there are at least two safety schools, exit this loop and we'll try to see if we can add a reach school (next for loop)
            ourlist.append(university)
            safetycount = safetycount + 1
            spent = spent + int(university[4])
    for university in reach: 
        if int(university[2]) <= grade + 3 and spent + int(university[4]) < budget: #trying to get a reach school
            ourlist.append(university)
            spent = spent + int(university[4])
            reachcount = reachcount + 1      
    for university in safety: #if no reach school is feasible, we'll keep adding safety schools until budget is met
        if spent + int(university[4]) < budget:
            ourlist.append(university)
            safetycount = safetycount + 1
            spent = spent + int(university[4])
    return ourlist


# Test the function with a grade of 96
# reach, target, safety, our = sort_universities(93, 'Computer Science', 400)
# print("Reach universities:", reach)
# print("Target universities:", target)
# print("Safety universities:", safety)
# print("Our list:", our)


@app.route('/api/data', methods=['GET'])
def get_data():
    # Your sorting logic here (replace grade, program, and budget with actual values)
    grade = 96
    program = 'Computer Science'
    budget = 500
    reach, target, safety, ourlist = sort_universities(grade, program, budget)

    # Now you have the sorted lists, so you can convert them to JSON-friendly format
    reach_data = [{'name': uni[0], 'program': uni[1], 'grade': uni[2], 'cost': uni[3]} for uni in reach]
    target_data = [{'name': uni[0], 'program': uni[1], 'grade': uni[2], 'cost': uni[3]} for uni in target]
    safety_data = [{'name': uni[0], 'program': uni[1], 'grade': uni[2], 'cost': uni[3]} for uni in safety]
    ourlist_data = [{'name': uni[0], 'program': uni[1], 'grade': uni[2], 'cost': uni[3]} for uni in ourlist]

    return jsonify({
        'reach': reach_data,
        'target': target_data,
        'safety': safety_data,
        'ourlist': ourlist_data
    })

@app.route('/')
def catch_all():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('index.html')
    

if __name__ == '__main__':
    app.run(debug=True, port=3000)






