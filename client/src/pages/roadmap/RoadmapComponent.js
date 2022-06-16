import React, { useContext } from "react";
import { DataContext } from "../../context/data/dataContext";
import classes from "./RoadmapComponent.module.css";
import commentIcon from "../../images/icon-comments.svg";
import arrowUp from "../../images/icon-arrow-up.svg";
const RoadmapComponent = () => {
  const dataContext = useContext(DataContext);
  const { products, comments } = dataContext;

  const planned = products.filter((item) => item.status === "planned");
  const inProgress = products.filter((item) => item.status === "in-progress");
  const completed = products.filter((item) => item.status === "live");

  return (
    <div className={classes.componentcontainer}>
      <div className={classes.pc}>
        <h1>Planned({planned.length})</h1>
        <p>Ideas proioritized for research</p>
        <div className={classes.pc}>
          {planned.map((item, index) => {
            return (
              <div className={classes.plannedcard}>
                <div>
                  <div className={classes.orangedot}></div>
                  <h3>Planned</h3>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
                <div>{item.category}</div>
                <div className={classes.upvotesandcommentscontainer}>
                  <div>
                    <img
                      className={classes.arrowUp}
                      style={{
                        backgroundColor: "transparent",
                        top: "-20px",
                      }}
                      src={arrowUp}
                      alt="comment icon"
                    />
                    {item.upvotes}
                  </div>
                  <div>
                    <img
                      style={{
                        margin: "0 5px",
                        backgroundColor: "transparent",
                      }} 
                     alt="commenticon" src={commentIcon}
                    />
                    {products[index].comments &&
                    products[index].comments.length > 0
                      ? products[index].comments.length
                      : 0}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.pc}>
        <h1>In Progress({inProgress.length})</h1>
        <p>Currently being developed</p>
        <div className={classes.pc}>
          {inProgress.map((item, index) => {
            return (
              <div className={classes.inprogresscard}>
                <div>
                  <div className={classes.purpledot}></div>
                  <h3>In-Progress</h3>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
                <div>{item.category}</div>
                <div className={classes.upvotesandcommentscontainer}>
                  <div>
                    <img
                      className={classes.arrowUp}
                      style={{
                        backgroundColor: "transparent",
                        top: "-20px",
                      }}
                      src={arrowUp}
                      alt="comment icon"
                    />
                    {item.upvotes}
                  </div>
                  <div>
                    <img
                      style={{
                        margin: "0 5px",
                        backgroundColor: "transparent",
                      }}
                      src={commentIcon}
                    />
                    {products[index].comments &&
                    products[index].comments.length > 0
                      ? products[index].comments.length
                      : 0}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.pc}>
        <h1>Live({completed.length})</h1>
        <p>Release Features</p>
        <div className={classes.pc}>
          {completed.map((item, index) => {
            return (
              <div className={classes.livecard}>
                <div>
                  <div className={classes.greendot}></div>
                  <h3>Live</h3>
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <h4>{item.description}</h4>
                </div>
                <div>{item.category}</div>
                <div className={classes.upvotesandcommentscontainer}>
                  <div>
                    <img
                      className={classes.arrowUp}
                      style={{
                        backgroundColor: "transparent",
                        top: "-20px",
                      }}
                      src={arrowUp}
                      alt="comment icon"
                    />
                    {item.upvotes}
                  </div>
                  <div>
                    {" "}
                    <img
                      style={{
                        margin: "0 5px",
                        backgroundColor: "transparent",
                      }}
                      src={commentIcon}
                    />
                    {products[index].comments &&
                    products[index].comments.length > 0
                      ? products[index].comments.length
                      : 0}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RoadmapComponent;
