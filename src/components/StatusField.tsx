import React from "react";

const circleStyles = {
    backgroundColor: "rgba(155, 223, 182, 0.2)",
};

interface IIconField {
    label?: string
    type?: string
}

const StatusField: React.FC<IIconField> = ({ type }) => {
    const StatusLabel = () => {
        if (type === "success") {
            return (
                <label className="text-[#506659] p-2" style={{...circleStyles}}>UploadFinished</label>
            );
        }
        else if (type === "fail") {
            return (
                <label className="p-2" style={{...circleStyles}}>Fail</label>
            );
        }
    }
    return (
         <div className="rounded">
            {StatusLabel()}
        </div>
    )
};

export default StatusField;