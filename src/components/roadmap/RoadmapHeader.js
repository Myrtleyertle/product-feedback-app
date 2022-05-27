import React from "react";
import { Link } from "react-router-dom";
import AddFeedbackModal from "../Modals/AddFeedbackModal";
import classes from "./RoadmapHeader.module.css";
const RoadmapHeader = () => {
  return (
    <div className={classes.headermain}>
      <div className={classes.headerlink}>
      <Link to='/'>Go Back</Link>
      <h1>Roadmap</h1>
      </div>
      <AddFeedbackModal />
    </div>
  );
};

export default RoadmapHeader;
