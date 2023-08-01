import { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import banner from "../../assets/banner.png";
import data from "../../data/data.json";
import { Button, SelectDropdown, Filter, Tabs } from "../../components";
import { ArrowRight, Phone } from "react-bootstrap-icons";
import { HighSchoolAvgOptions, programOptions } from "../../data/utils";

const Home = () => {
  const [generateList, setGenerateList] = useState(false);
  useEffect(() => {
    const hash = window.location.hash.slice(1); // Remove the '#' character from the hash
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0,0)
      }
    }
  }, []);
  return (
    <main className={styles.homePageContainer}>
      <Container className={styles.bannerContainer}>
        <Row className={styles.bannerInnerRow}>
          <Col sm={12} md={6} lg={6} className={styles.bannerContent}>
            <h2>{data.homePage.banner.mainHeading}</h2>
            <p>{data.homePage.banner.description}</p>
            <Button
              label="Find Schools"
              maxWidth="23.6rem"
              margin="0 auto 0 0"
              /*
              onClick= {() =>
                findSchool.scrollIntoView({ behavior: 'smooth' });
              }
              */
              icon={
                <>
                  <ArrowRight />
                </>
              }
            />
          </Col>
          <Col sm={12} md={6} lg={6} className={styles.bannerImg}>
            <img src={banner} alt="Banner" />
          </Col>
        </Row>
      </Container>
      <section>
        <Container>
          <Row>
            <Col className={styles.secondSection}>
              <div className={styles.secondColOne}>
                <Phone size={50} />
                <div className={styles.stepContent}>
                  <p>1</p>
                  <p>{data.homePage.secondSection.stepOneContent}</p>
                </div>
              </div>
              <div className={styles.secondColTwo}>
                <Phone size={50} />
                <div className={styles.stepContent}>
                  <p>2</p>
                  <p>{data.homePage.secondSection.stepTwoContent}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.thirdSection} id="findSchool">
        <Container>
          <h3>{data.homePage.thirdSection.sectionTitle}</h3>
          {generateList ? <Row className={styles.activeGenerateList}>
            <Col>
              <Filter />
              <Tabs />
            </Col>
          </Row> : (
            <>
              <Row className={styles.thirdSectionRow}>
                <Col sm={12} md={12} lg={6} className={styles.thirdColOne}>
                  <h4>{data.homePage.thirdSection.thirdColOneTitle}</h4>
                  <SelectDropdown
                    selectOptions={HighSchoolAvgOptions}
                    placeholder="EXAMPLE: 78%"
                  />
                </Col>
                <Col sm={12} md={12} lg={6} className={styles.thirdColTwo}>
                  <h4>{data.homePage.thirdSection.thirdColTwoTitle}</h4>
                  <SelectDropdown
                    selectOptions={programOptions}
                    placeholder="SEARCH"
                  />
                </Col>
                <Col sm={12} md={12} lg={6} className={styles.thirdColThree}>
                  <h4 style={{ marginTop: '2.5rem' }}>{data.homePage.thirdSection.thirdColThreeTitle}</h4>
                  <SelectDropdown
                    selectOptions={programOptions}
                    placeholder="BYE"
                  />
                </Col>
              </Row>
              <Button
                label="Generate list"
                maxWidth="19rem"
                margin="8rem auto 0"
                onClick={() => {
                  setGenerateList(true);
                }}
              />
            </>
          )}
        </Container>
      </section>
    </main>
  );
};

export default Home;
