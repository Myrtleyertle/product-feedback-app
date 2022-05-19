import React from "react";
import Sidebar from "../components/desktop/Sidebar";
import Feedback from "../components/FeedBack/Feedback";
import '../App.css';
import { State } from "../context/data/Context";

export default function Desktopview() {
  return (
    <div className="desktopview">
        <Sidebar />
        <Feedback className="" />
    </div>
  );
}
