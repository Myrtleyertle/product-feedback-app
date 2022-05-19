import React, { useEffect, useContext } from "react";
import Sidebar from "../desktop/Sidebar";
import '../../App.css';
import { DataContext } from "../../context/data/dataContext";
import Suggestions from "../Suggestions/Suggestions";

export default function Desktopview() {
  const dataContext = useContext(DataContext);
  const { getData } = dataContext;
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="desktopview">
        <Sidebar />
        <Suggestions className="" />
    </div>
  );
}
