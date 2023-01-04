import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Gourav Lala </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />I am a aspiring web developer, and learning advance 
            technology. <span className="purple">1200+ hours</span> of practical experience building numerous websites and applications.
            Solved more than <span className="purple">200</span> data structure questions. 
            Strongly interested in obtaining a fullStack web developer position to create impactful and scalable products.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Follow world Affairs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Either Run the Day or the Day Runs You"{" "}
          </p>
          <footer className="blockquote-footer">Jim Rohn</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;