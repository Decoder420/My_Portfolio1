import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dataLeakage from "../../Assets/Projects/data-leakage.png";
import emotion from "../../Assets/Projects/emotion.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a couple of projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={dataLeakage}
              isBlog={false}
              title="Data Leakage Detection"
              description="Developed a web-based Data Leakage Detection System using PHP, MySQL, JavaScript, Bootstrap, and HTML5 to track unauthorized data dissemination. Integrated both static and behavioral analysis for enhanced data security."
              ghLink="https://github.com/Decoder420/data-leakage-detection"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Emotion Detection using Facial Recognition"
              description="Applied data augmentation, grayscale normalization, and dropout to improve model robustness. Fine-tuned CNN for higher accuracy across expressions, evaluated using confusion matrix and accuracy metrics."
              ghLink="https://github.com/Decoder420/Emotion-Detection-using-Facial-Recognition-"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
