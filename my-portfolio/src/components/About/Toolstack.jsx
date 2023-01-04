import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiNetlify,
  SiVisualstudiocode,
  SiCodesandbox,
  SiGithub,
  SiReplit,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodesandbox />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        < SiReplit/>
      </Col>
    </Row>
  );
}

export default Toolstack;