import React, { Component, useState } from "react";
import data from "../data.json";

export default class Feedback extends Component {

  constructor(props){
    super(props)
    this.state = data;
    this.filter = ""
    this.upvotes = this.state.productRequests.upvotes
    this.SortbyUpvotes = this.SortbyUpvotes.bind(this);
  }
  SortbyUpvotes(){
    
  }

  render(){
    return (
      <div className="feedback-page">
        <div className="d-flex info">
          <img />
          <h3 className="suggestions-info">
            <span></span>
            suggestions
          </h3>
          <div className="d-flex">
            <p>Sort By:</p>
            <select onChange={(event) => {
              this.filter = event.target.value;
            }}
            >
              <option value="">All</option>
              <option value="upvotes">Most Upvotes</option>
              <option value="feature">feature</option>
              <option value="bug">bug</option>
              <option value="enhancement">enhancement</option>
            </select>
          </div>
          <button>+ Add Feedback</button>
        </div>
        <div className="feedback">
            {this.state.productRequests
              .filter((pr) => {
                let i = pr.id;
                if (this.filter === "") {
                  return pr;
                } else if (
                  pr.category
                    .toLocaleLowerCase()
                    .includes(this.filter.toLocaleLowerCase())
                ) {
                  return pr;
                } 
  
                if(pr.upvotes.includes(this.upvotes)){
                  return pr
                }
  
              })
              .map((feedbacks) => {
                const { id, title, category, description, status, upvotes } =
                  feedbacks;
                return (
                  <div className="feedbackcard" key={id}>
                    <div>
                      <h4 className="feedback-upvotes ">{upvotes}</h4>
                    </div>
                    <div className="d-block m-auto feedback-info">
                      <h5>{title}</h5>
                      <span>{description}</span>
                      <span>{category}</span>
                      <span>{status}</span>
                    </div>
                    <div>
                      <img />
                      <p></p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );

  }
}
