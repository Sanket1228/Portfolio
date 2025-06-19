import { Col, Container, Row } from "react-bootstrap";
import chatify from "../../Assets/Projects/chatify.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CodeWorld"
              description="A full-stack code snippet management platform using Node.js, Express, TypeScript, and MongoDB. It features smart code suggestions powered by the OpenAI API, secure JWT-based authentication, and a responsive frontend with React, Redux, and the Monaco Editor. The project is containerized with Docker and deployed on Render using an automated CI/CD pipeline."
              ghLink="https://github.com/Sanket1228/VTube"
              demoLink="https://codeworld-m8ds.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VTube"
              description="Developed a backend application with two modules: User and Videos. 
              Implemented a monolithic structure to efficiently manage different modules. 
            Implemented user authentication using JWT (JSON Web Token). 
            Enabled users to upload and manage videos. 
            Utilized multiple aggregation pipelines for complex data queries. 
            Designed and developed RESTful APIs. 
            Managed data storage and retrieval using Mongo db"
              ghLink="https://github.com/Sanket1228/VTube"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              isBlog={false}
              title="VTube-UI"
              description="Developing a web application for the VTube backend system. 
Implemented a monorepo structure to efficiently manage different
 modules. 
Utilized the latest Redux Toolkit to manage global state across the
 application. 
Designed and developed user-friendly interfaces for user
 authentication and video management using Material-UI for a
 consistent and responsive design. 
Developed reusable UI components and managed state with Redux.
 Ensured seamless communication between frontend and backend
 APIs."
              ghLink="https://github.com/Sanket1228/VTube-ui"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
