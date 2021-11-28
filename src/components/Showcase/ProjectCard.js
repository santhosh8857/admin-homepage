import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <>
      <h4 className="small font-weight-bold">
        {item.title} <span className="float-right">{item.percent}</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${item.color}`}
          role="progressbar"
          style={{ width: `${item.value}%` }}
          aria-valuenow={item.value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </>
  );
};

export default ProjectCard;
