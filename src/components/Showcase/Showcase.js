import React from "react";
import ColorCard from "./ColorCard";
import ProjectCard from "./ProjectCard";

const Showcase = () => {
  const projectItems = [
    {
      title: "Server Migration",
      color: "danger",
      value: "20",
      percent: "20%",
    },
    {
      title: "Sales Tracking",
      color: "warning",
      value: "40",
      percent: "40%",
    },
    {
      title: "Customer Database",
      color: "primary",
      value: "60",
      percent: "60%",
    },
    {
      title: "Payout Details",
      color: "info",
      value: "80",
      percent: "80%",
    },
    {
      title: "Account Setup",
      color: "success",
      value: "100",
      percent: "Complete!",
    },
  ];

  const colorItems = [
    { title: "Primary", classColor: "primary", hexaColor: "#4e73df" },
    { title: "Success", classColor: "success", hexaColor: "#1cc88a" },
    { title: "Info", classColor: "info", hexaColor: "#36b9cc" },
    { title: "Warning", classColor: "warning", hexaColor: "#f6c23e" },
    { title: "Danger", classColor: "danger", hexaColor: "#e74a3b" },
    { title: "Secondary", classColor: "secondary", hexaColor: "#858796" },
    { title: "Light", classColor: "light", hexaColor: "#f8f9fc" },
    { title: "Dark", classColor: "dark", hexaColor: "#5a5c69" },
  ];

  return (
    <>
      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div class="card-body">
              {projectItems.map((item, key) => {
                return <ProjectCard key={key} item={item} />;
              })}
            </div>
          </div>
          <div class="row">
            {colorItems.map((item, key) => {
              return <ColorCard key={key} item={item} />;
            })}
          </div>
        </div>
        <div class="col-lg-6 mb-4">
          {/* Illustrations */}
          {/* Approach */}
        </div>
      </div>
    </>
  );
};

export default Showcase;
