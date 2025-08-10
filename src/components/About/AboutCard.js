import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manan Mandal</span> 
            from <span className="purple">Rishikesh, Uttarakhand, India</span>.
            <br />
            I have completed my <strong>MCA in Cybersecurity and Forensics</strong> 
            from <span className="purple">University of Petroleum and Energy Studies (UPES), Dehradun</span>.
            <br />
            I have hands-on experience with various security tools including Nessus, Burp Suite, Metasploit, and Wireshark,
            and have worked on AI-driven security projects.
            <br />
            <br />
            Apart from coding and cybersecurity, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Cybersecurity Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Tech Events & Competitions
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Secure the future, one byte at a time."
          </p>
          <footer className="blockquote-footer">Manan Mandal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
