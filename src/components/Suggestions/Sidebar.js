import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DataContext } from "../../context/data/dataContext";
import Banner from "./Banner";
import classes from "./Sidebar.module.css";
const Sidebar = () => {
  const dataContext = useContext(DataContext);
  const { setFilter, Filter, products } = dataContext;
  const planned = products.filter((item) => item.status === "planned");
  const inProgress = products.filter((item) => item.status === "in-progress");
  const completed = products.filter((item) => item.status === "live");
  return (
    <nav className="d-block">
      <Banner  />
      <Container style={{backgroundColor: '#FFF', width: '90%', padding: '10px', borderRadius: '10px'}} className="fluid">
        <Row>
          <Col>
            <button
              onClick={(event) => setFilter(event)}
              value=""
            >
              All
            </button>{" "}
          </Col>
          <Col>
            <button
              onClick={(event) => setFilter(event)}
              value="ui"
            >
              UI
            </button>{" "}
          </Col>
          <Col>
            <button
              onClick={(event) => setFilter(event)}
              value="ux"
            >
              UX
            </button>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              onClick={(event) => setFilter(event)}
              value="enhancement"
            >
              Enchancement
            </button>{" "}
            <button
              onClick={(event) => setFilter(event)}
              value="bug"
            >
              Bug
            </button>{" "}
          </Col>
          <Col>
            <button
              onClick={(event) => setFilter(event)}
              value="feature"
            >
              Feature
            </button>{" "}
          </Col>
        </Row>
      </Container>
      <div className={classes.roadmap}>
        <div className={classes.title}>
          <h2>Roadmap</h2>
          <Link to="/RoadmapPage">View</Link>
        </div>
        <div className={classes.roadmapbody}>
          <div className={classes.info}>
            <div className={classes.orangediv}>
              <div className={classes.orangedot}></div>
              <div>Planned</div>
            </div>
            <div className={classes.purplediv}>
              <div className={classes.purpledot}></div>
              <div>In-Progress</div>
            </div>
            <div className={classes.greendiv}>
              <div className={classes.greendot}></div>
              <div>Live</div>
            </div>
          </div>
            <div className={classes.amount}>
              <div>{planned.length}</div>
              <div>{inProgress.length}</div>
              <div>{completed.length}</div>
            </div>
        </div>
      </div>
    </nav>
  );
};
export default Sidebar;
