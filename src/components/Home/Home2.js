import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaBlogger } from "react-icons/fa";

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
              I am passionate about <b className="purple">Cybersecurity</b> and
              building innovative technology solutions that solve real-world problems.
              <br />
              <br />
              Skilled in:
              <i>
                <b className="purple"> Python, PHP, MySQL, JavaScript, HTML5, Bootstrap</b>
              </i>
              , along with hands-on experience in security tools like
              <b className="purple"> Nessus, Burp Suite, Metasploit, and Wireshark</b>.
              <br />
              <br />
              My key areas of interest include:
              <i>
                <b className="purple"> Cybersecurity, AI-driven Security Solutions</b> and
                <b className="purple"> Web Application Development</b>.
              </i>
              <br />
              <br />
              I have worked on projects such as:
              <b className="purple"> Data Leakage Detection</b> and
              <b className="purple"> Emotion Detection using Facial Recognition</b>,
              applying real-time monitoring, machine learning, and secure coding practices.
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
                  href="https://github.com/Decoder420"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manan-mandal-cybersec/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            <li className="social-icons">
                <a
                  href="https://www.blogger.com/profile/17963020498807522462"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                <FaBlogger />
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
