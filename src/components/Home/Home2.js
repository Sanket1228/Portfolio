import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

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
                <b className="purple"> MERN stack </b>
              </i>
              developer with a strong foundation in
              <i>
                <b className="purple"> JavaScript, TypeScript </b>
              </i>
              building scalable and efficient full-stack web applications.
              <br />
              <br />
              With hands-on experience in &nbsp;
              <i>
                <b className="purple"> MongoDB</b>,
              </i>
              <i>
                <b className="purple"> Express.js</b>,
              </i>
              <i>
                <b className="purple"> React </b>
              </i>
              and
              <i>
                <b className="purple"> Node.js</b>
              </i>
              ,&nbsp;I enjoy turning complex problems into simple, beautiful,
              and intuitive solutions. My field of Interest's are building new
              &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b>
              </i>
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
              <img src={myImg} className="img-fluid" alt="avatar" />
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
