import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { faChartPie, faCircleUser, faFolder, faArrowLeft, faCalendarDay, faPeopleGroup, faTag } from "@fortawesome/free-solid-svg-icons";

const circleStyles = {
    backgroundColor: "#f7f7f9",
    display: "flex",
    justifyContent: "center"
};

interface IIconField {
    src?: string
    width?: number
    height?: number
    active?: boolean
}

const IconField: React.FC<IIconField> = ({ src, width, height, active }) => {
    const Icon = () => {
        if (src === "faChartPie") {
            return <FontAwesomeIcon icon={faChartPie} color={(active===true)?"#8894FF":"#A6B0C5"} />
        }
        else if (src === "faFolder") {
            return <FontAwesomeIcon icon={faFolder} color={(active===true)?"#8894FF":"#A6B0C5"} />
        }
        else if (src === "faCircleUser") {
            return <FontAwesomeIcon icon={faCircleUser} color={(active===true)?"#8894FF":"#A6B0C5"} />
        }
        else if (src === "faArrowLeft") {
            return <FontAwesomeIcon icon={faArrowLeft} color={"#A6B0C5"} />
        }
        else if (src === "faCalendarDay") {
            return <FontAwesomeIcon icon={faCalendarDay} color={"#A6B0C5"} />
        }
        else if (src === "faPeopleGroup") {
            return <FontAwesomeIcon icon={faPeopleGroup} color={"#7982FF"} />
        }
        else if (src === "faTag") {
            return <FontAwesomeIcon icon={faTag} color={"#FF9092"} flip={"horizontal"}/>
        }
    }
    return (
         <div className="m-1" style={circleStyles}>
            {Icon()}
        </div>
    )
};

export default IconField;