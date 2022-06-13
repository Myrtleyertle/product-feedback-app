import React, {useContext} from "react";
import { DataContext } from "../../context/data/dataContext";
import RaodmapHeader from "./RoadmapHeader";
import RoadmapComponent from "./RoadmapComponent";

export const RoadmapPage = () => {
    const dataContext = useContext(DataContext);
    const { products } = dataContext;
    return (
        <div >
            <div><RaodmapHeader /></div>
            <div><RoadmapComponent /></div>
        </div>
    )
}
