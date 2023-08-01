import styles from "./style.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../assets/banner.png";
import data from "../../data/data.json";
import teamImg from "../../assets/team.jpg";
import { Instagram, Linkedin, Twitter } from "react-bootstrap-icons";

const About = () => {
  const teamInfo = [
    {
      image: teamImg,
      name: "John Doe",
      position: "Position Title",
      age: "25yo",
      university: "University of Toronto",
      instagram: "#",
      linkedIn: "#",
      twitter: "#",
    },
    {
      image: teamImg,
      name: "John Doe",
      position: "Position Title",
      age: "25yo",
      university: "University of Toronto",
      instagram: "#",
      linkedIn: "#",
      twitter: "#",
    },
  ];
  return (
    <main className={styles.aboutPageContainer}>
      <section className={styles.aboutFirstSection}>
        <Container>
          <Row className={styles.aboutFirstRow}>
            <Col sm={12} md={6} lg={6}>
              <h2>{data.aboutPage.firstSection.title}</h2>
              <p>
                {data.aboutPage.firstSection.descriptionOne}
                <br />
                <br />
                {data.aboutPage.firstSection.descriptionTwo}
              </p>
            </Col>
            <Col sm={12} md={6} lg={6}>
              <img src={banner} alt="banner" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.aboutSecondSection}>
        <Container>
          <Row>
            <Col>
              <h2>{data.aboutPage.secondSection.sectionTitle}</h2>
              <div className={styles.teamContainer}>
                {teamInfo.map((data, i) => {
                  return (
                    <div className={styles.teamCard} key={i}>
                      <div className={styles.teamImg}>
                        <img src={data.image} alt="Team" />
                      </div>
                      <div className={styles.teamInfo}>
                        <h3>{data.name}</h3>
                        <p>{data.position}</p>
                        <p>{data.age}</p>
                        <p>{data.university}</p>
                        <div className={styles.socialIcons}>
                          <a href={data.instagram} alt="social">
                            <Instagram color="var(--fadedPrimaryColor)" size={30}/>
                          </a>
                          <a href={data.linkedIn} alt="social">
                          <Linkedin color="var(--fadedPrimaryColor)" size={30}/>
                          </a>
                          <a href={data.twitter} alt="social">
                          <Twitter color="var(--fadedPrimaryColor)" size={30}/>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className={styles.contactUs}>Contact us at: <a href="mailto:adiswaro@gmail.com">adiswaro@gmail.com</a></p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default About;
