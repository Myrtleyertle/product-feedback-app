import React, { useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";
import { DataContext } from "../context/data/dataContext";
import Suggestions from "./Suggestions/Suggestions";

export default function Desktopview() {
  const dataContext = useContext(DataContext);
  const { getProducts, getUsers } = dataContext;
  useEffect(() => {
    getProducts();
    getUsers();
  }, []);
  return (
    <div
    className="uicontainer"
    >
      <Sidebar />
      <Suggestions className="Suggestions" />
    </div>
  );
}
