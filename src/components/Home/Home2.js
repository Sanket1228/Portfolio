import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/profile_pic.png";
import "./Home2.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am a passionate
              <i>
                <b className="purple"> Full-Stack Software Engineer </b>
              </i>
              &nbsp;with over
              <i>
                <b className="purple"> 3 years of experience </b>
              </i>
              &nbsp;building scalable, secure, and user-friendly applications,
              primarily in the
              <i>
                <b className="purple"> fintech and product development</b>
              </i>
              &nbsp;domains. I specialize in
              <i>
                <b className="purple"> React, TypeScript, and Redux </b>
              </i>
              &nbsp;on the frontend, and have strong backend experience with
              <i>
                <b className="purple">
                  &nbsp;Java (Spring Boot), Kotlin (Ktor), and Node.js
                </b>
              </i>
              .
              <br />
              <br />I love architecting clean and modular systems—whether it’s
              designing
              <i>
                <b className="purple">
                  &nbsp;REST APIs, implementing authentication with JWT, or with
                  Docker and CI/CD pipelines
                </b>
              </i>
              &nbsp; I’ve also worked with
              <i>
                <b className="purple">
                  &nbsp;micro frontends, Storybook UI libraries,
                </b>
              </i>
              &nbsp;and message queues like
              <i>
                <b className="purple">&nbsp;AWS SQS</b>
              </i>
              &nbsp; scalable architecture.
              <br />
              <br />I am always eager to learn, experiment, and grow as a
              developer. As I continue to sharpen my skills, I am actively
              seeking new opportunities to contribute to innovative projects and
              collaborate with forward-thinking teams that embrace cutting-edge
              technologies.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <div className="avatar-wrapper"> */}
              <img src={myImg} className="img-fluid" alt="avatar" />
              {/* </div> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Sanket1228"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sanket-patil-2870bb1ba/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/patilsanket_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
