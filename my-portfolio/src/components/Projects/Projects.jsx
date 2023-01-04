import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FinalSugarCosmetics from "../../Assets/Projects/FinalSugarCosmetics.png";
import SugarBlog from "../../Assets/Projects/SugarBlog.png";
import TemplateForPortfolio from "../../Assets/Projects/TemplateForPortfolio.png";

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
              imgPath={FinalSugarCosmetics}
              isBlog={false}
              title="Sugar Cosmetics"
              description="It's a clone of cosmetics E-Commerce website 'sugar'.
              Have features which allows user for Login, Apply promoCode, Add to wish list as well 
              as payment supports system."
              ghLink="https://github.com/aasimsyed97/SugarCosmetics01/tree/main/sugarCosmeticWeb"
              demoLink="https://endearing-kashata-64f2c6.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SugarBlog}
              isBlog={false}
              title="Sugar Blog"
              description="suagar blog page build with pure Html, CSS and 
              javascprit which takes the content from makdown files and renders 
              it using netlify."
              ghLink="https://github.com/aasimsyed97/SugarCosmetics01/tree/main/sugarCosmeticWeb"
              demoLink="https://endearing-kashata-64f2c6.netlify.app/blog.html"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TemplateForPortfolio}
              isBlog={false}
              title="Templete for Portfolio"
              description="Build templete for portfolio with javaScript, 
              with functionlity download resume and css hover effect. "
              ghLink="https://github.com/gouravlala"
              demoLink="https://relaxed-sherbet-9f393c.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TemplateForPortfolio}
              isBlog={false}
              title="Expenses Tracker"
              description="Used for track your daily expenses and income as well. with the help of react material UI, and local storage it fully able to visualize your activities of whole day."
              ghLink="https://github.com/gouravlala/Expanse-Tracker/tree/master/expenses-traker"
              demoLink="https://expenses-traker-by-gourav.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;