import React from "react";
import { useContext } from "react";
import { DataContext } from "../context/data/dataContext";
import {
  NavDropdown,
  NavDropdownItem,
  NavDropdownDivider,
  NavDropdownToggle,
  NavDropdownMenu,
} from "react-bootstrap";
const Select = () => {
  const dataContext = useContext(DataContext);
  const { setFilter, Filter } = dataContext;
  return (
    <div
      className="dropdown"
      style={{ display: "flex", alignItems: "center",justifyContent: 'center', color: "grey" }}
    >
      <div style={{ color: "grey" }}>Sort By:</div>
      <select
        style={{
          width: "100px",
          height: "50px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "transparent",
          color: "grey",
          fontSize: "20px",
          color: "#000",
          margin: "0 10px",
          select: "none",
        }}
        onChange={(event) => setFilter(event)}
      >
        <option  value="All">All</option>
        <option value="MostUp">Most Upvotes</option>
        <option value="MostDown"> DownVotes</option>
        <option value="MostComments">Most Comments</option>
        <option value="LeastComments">Least Comments</option>
      </select>
    </div>
  );
};

export default Select;
