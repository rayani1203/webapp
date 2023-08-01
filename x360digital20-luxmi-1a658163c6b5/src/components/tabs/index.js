import { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import styles from "./style.module.scss";
import uniImg from "../../assets/university.jpg";
import Button from "../button";

const Tabs = () => {
  const [school, setSchool] = useState("reach");
  const schoolData = [
    {
      universityImage: uniImg,
      universityName: "University of Guelph",
      address: "Guelph, ON",
      applicationFee: "$125",
      applicationDate: "01/02/2023",
      gpa: "85",
      chance: "75",
    },
    {
      universityImage: uniImg,
      universityName: "University of Guelph",
      address: "Guelph, ON",
      applicationFee: "$125",
      applicationDate: "01/02/2023",
      gpa: "85",
      chance: "75",
    },
    {
      universityImage: uniImg,
      universityName: "University of Guelph",
      address: "Guelph, ON",
      applicationFee: "$125",
      applicationDate: "01/02/2023",
      gpa: "85",
      chance: "75",
    },
    {
      universityImage: uniImg,
      universityName: "University of Guelph",
      address: "Guelph, ON",
      applicationFee: "$125",
      applicationDate: "01/02/2023",
      gpa: "85",
      chance: "75",
    },
  ];
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabHeader}>
        <ul>
          <li
            className={school === "reach" && "activeTab"}
            onClick={() => {
              setSchool("reach");
            }}
          >
            Reach Schools
          </li>
          <li
            className={school === "target" && "activeTab"}
            onClick={() => {
              setSchool("target");
            }}
          >
            Target Schools
          </li>
          <li
            className={school === "safety" && "activeTab"}
            onClick={() => {
              setSchool("safety");
            }}
          >
            Safety Schools
          </li>
          <li
            className={school === "Your List" && "activeTab"}
            onClick={() => {
              setSchool("yourlist");
            }}
          >
            Your List
          </li>
        </ul>
      </div>
      {school === "reach" && (
        <div className={styles.tabContent}>
          {schoolData.map((data, i) => (
            <div className={styles.collegeCard}>
              <div className={styles.collegeInfo}>
                <div className={styles.collegeImg}>
                  <img src={data.universityImage} alt="university"/>
                </div>
                <div className={styles.collegeAbout}>
                  <div className={styles.collegeName}>
                    <h2>{data.universityName}</h2>
                    <p>{data.address}</p>
                  </div>
                  <div className={styles.collegeFee}>
                    <p>Application Fee</p>
                    <h4>{data.applicationFee}</h4>
                  </div>
                  <div className={styles.collegeFee}>
                    <p>Application Deadline</p>
                    <h4>{data.applicationDate}</h4>
                  </div>
                  <div className={styles.detailsBtn}>
                    <Button
                      fontWeight="400"
                      fontSize="1.8rem"
                      padding="1.2rem 0"
                      label="Program Details"
                      background="var(--whiteColor)"
                      borderRadius="1.5rem"
                    />
                    <Button
                      fontWeight="400"
                      fontSize="1.8rem"
                      padding="1.2rem 0"
                      label="Apply"
                      background="var(--whiteColor)"
                      borderRadius="1.5rem"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBlock}>
                  <h3>GPA</h3>
                  <ProgressBar now={data.gpa} label={`${data.gpa}%`} />
                </div>
                <div className={styles.progressBlock}>
                  <h3>Chance</h3>
                  <ProgressBar now={data.chance} label={`${data.chance}%`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {school === "target" && (
        <div className={styles.tabContent}>
          {schoolData.map((data, i) => (
            <div className={styles.collegeCard}>
              <div className={styles.collegeInfo}>
                <div className={styles.collegeImg}>
                  <img src={data.universityImage} alt="university"/>
                </div>
                <div className={styles.collegeAbout}>
                  <div className={styles.collegeName}>
                    <h2>{data.universityName}</h2>
                    <p>{data.address}</p>
                  </div>
                  <div className={styles.collegeFee}>
                    <p>Application Fee</p>
                    <h4>{data.applicationFee}</h4>
                  </div>
                  <div className={styles.collegeFee}>
                    <p>Application Deadline</p>
                    <h4>{data.applicationDate}</h4>
                  </div>
                  <div className={styles.detailsBtn}>
                    <Button
                      fontWeight="400"
                      fontSize="1.8rem"
                      padding="1.2rem 0"
                      label="Program Details"
                      background="var(--whiteColor)"
                      borderRadius="1.5rem"
                    />
                    <Button
                      fontWeight="400"
                      fontSize="1.8rem"
                      padding="1.2rem 0"
                      label="Apply"
                      background="var(--whiteColor)"
                      borderRadius="1.5rem"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBlock}>
                  <h3>GPA</h3>
                  <ProgressBar now={data.gpa} label={`${data.gpa}%`} />
                </div>
                <div className={styles.progressBlock}>
                  <h3>Chance</h3>
                  <ProgressBar now={data.chance} label={`${data.chance}%`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {school === "safety" && (
        <div className={styles.tabContent}>
          {schoolData.map((data, i) => (
            <div className={styles.collegeCard}>
              <div className={styles.collegeInfo}>
                <div className={styles.collegeImg}>
                  <img src={data.universityImage} alt="university"/>
                </div>
                <div className={styles.collegeAbout}>
                  <div className={styles.collegeName}>
                    <h2>{data.universityName}</h2>
                    <p>{data.address}</p>
                  </div>
                  <div className={styles.collegeFee}>
                    <p>Application Fee</p>
                    <h4>{data.applicationFee}</h4>
                  </div>
                  <div className={styles.collegeFee}>
                    <p>Application Deadline</p>
                    <h4>{data.applicationDate}</h4>
                  </div>
                  <div className={styles.detailsBtn}>
                    <Button
                      fontWeight="500"
                      fontSize="1.8rem"
                      padding="1.2rem 0"
                      width="25rem"
                      label="Program Details"
                      background="var(--whiteColor)"
                      borderRadius="5rem"
                    />
                    
                 {/*  <Button
                      fontWeight="400"
                      fontSize="1.8rem"
                      padding="1.2rem 0"
                      label="Apply"
                      background="var(--whiteColor)"
                      borderRadius="1.5rem"
                    />
          */}
                  </div>
                </div>
              </div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBlock}>
                  <h3>GPA</h3>
                  <ProgressBar now={data.gpa} label={`${data.gpa}%`} />
                </div>
                <div className={styles.progressBlock}>
                  <h3>Chance</h3>
                  <ProgressBar now={data.chance} label={`${data.chance}%`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
