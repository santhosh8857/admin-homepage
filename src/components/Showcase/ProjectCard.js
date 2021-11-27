import React from "react";

const ProjectCard = ({ item }) => {
  return (
    <>
      <h4 class="small font-weight-bold">
        {item.title} <span class="float-right">{item.percent}</span>
      </h4>
      <div class="progress mb-4">
        <div
          class={`progress-bar bg-${item.color}`}
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
