import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
const Navbar = () => {
  return (
    <nav className="d-block">
      <div className="nav-sec1">
        <h3 className="nav-sec1-title">FrontEnd Mentor</h3>
        <h4 className="nav-sec1-subtitle">FeedbackBoard</h4>
        <img
          src="../../assets/suggestions/desktop/background-header.png"
          className="sidebar-img"
        />
      </div>
      <Container className="fluid">
         <Row>
            <Col>
            <Button variant="light">All</Button>{" "}
            </Col>
            <Col>
            <Button variant="light">UI</Button>{" "}
            </Col>
            <Col>
            <Button variant="light">UX</Button>{" "}
            </Col>
        </Row>
        <Row>
          <Col>
          <Button variant="light">Enchancement</Button>{" "}
          <Button variant="light">Bug</Button>{" "}
          </Col>
          <Col>
          <Button variant="light">Feature</Button>{" "}
          </Col>
        </Row>
      </Container>
      <Container className="nav-sec3">
        <Row>
          <Col>
          <h2>Roadmap</h2>
          <Link to="view">View</Link>
          
          </Col>
        </Row>
        <Row>
          <span>Planned</span>
          <span>InProgress</span>
          <span>Live</span>
          
        </Row>
      </Container>
    </nav>
  );
};
export default Navbar;
