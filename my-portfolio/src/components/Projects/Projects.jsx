import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import FinalSugarCosmetics from "../../Assets/Projects/FinalSugarCosmetics.png";
import SugarBlog from "../../Assets/Projects/SugarBlog.png";
import TemplateForPortfolio from "../../Assets/Projects/TemplateForPortfolio.png";
import Expensestracker from "../../Assets/Projects/Expenses-tracker.png";
import Admin from "../../Assets/Projects/Admin.png"
import Ecommerce from "../../Assets/Projects/E-commerce.png"
import Privatewebsite from "../../Assets/Projects/Privatewebsite.png"

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
              imgPath={Expensestracker}
              isBlog={false}
              title="Expenses Tracker"
              description="Used for track your daily expenses and income as well. with the help of react material UI, and local storage it fully able to visualize your activities of whole day."
              ghLink="https://github.com/gouravlala/Expanse-Tracker/tree/master/expenses-traker"
              demoLink="https://expenses-traker-by-gourav.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Admin}
              isBlog={false}
              title="FrontEnd Admin"
              description="We will be using React, Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid. This application consists of Light and Dark Mode, 4 different Charts, 3 different Data Table Pages, and Calendar Integration.."
              ghLink="https://github.com/gouravlala/Responsive-MERN-App/tree/master/my-admin"
              demoLink="https://gourav-admin.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Privatewebsite}
              isBlog={false}
              title="Personal Website"
              description="I am using React hooks, modern CSS, swiper js, framer motion,
              and for contact,the Emall js library. 
              To make this site more functional and practical, i used implement dark and light mode with the useContext hook."
              ghLink="https://github.com/gouravlala/GouravPortFolio"
              demoLink="https://gourav-notupdated-portfolio.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="I am using React hooks, modern CSS, swiper js, framer motion."
              ghLink="https://github.com/gouravlala/JavaScript-project/tree/master/e-commerce"
              demoLink="https://gourav-e-commerce.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;