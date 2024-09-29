import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sanket Patil </span>
            from <span className="purple"> Nashik, Maharashtra, India.</span>
            <br />I am currently employed as a software developer at{" "}
            <span className="purple">Vayana Private Limited</span> .
            <br />I have completed my{" "}
            <span className="purple">Bachelors of Engineering</span> in
            <span className="purple">Information Technology</span> from{" "}
            <span className="purple">MET Institute of Engineering, Nashik</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Musical Instruments
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Go with the flow!" </p>
          <footer className="blockquote-footer">Sanket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
