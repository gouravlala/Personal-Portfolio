import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import GouravPDF from "../../Assets/../Assets/gourav_resume.pdf"
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import {pdfjs} from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// const   resumeLink ="https://raw.githubusercontent.com/gouravlala/Personal-Portfolio/blob/master/my-portfolio/src/Assets/gourav_%7Bresume%7D.pdf"

function ResumeNew() {
  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  const [width, setWidth] = useState(1200);
  

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={GouravPDF}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document file={GouravPDF} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} wrap={true}/>
         
          </Document>




        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={GouravPDF}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;