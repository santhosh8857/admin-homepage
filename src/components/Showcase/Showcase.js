import React from "react";
import ColorCard from "./ColorCard";
import ProjectCard from "./ProjectCard";
import illustration from "../Showcase/../../img/undraw_posting_photo.svg";

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
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>
            <div className="card-body">
              {projectItems.map((item, key) => {
                return <ProjectCard key={key} item={item} />;
              })}
            </div>
          </div>
          <div className="row">
            {colorItems.map((item, key) => {
              return <ColorCard key={key} item={item} />;
            })}
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          {/* Illustrations */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Illustrations
              </h6>
            </div>
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: "25rem" }}
                  src={illustration}
                  alt="..."
                />
              </div>
              <p>
                Add some quality, svg illustrations to your project courtesy of{" "}
                <a rel="nofollow" href="https://undraw.co/">
                  unDraw
                </a>
                , a constantly updated collection of beautiful svg images that
                you can use completely free and without attribution!
              </p>
              <a rel="nofollow" href="https://undraw.co/">
                Browse Illustrations on unDraw &rarr;
              </a>
            </div>
          </div>
          {/* Approach */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Development Approach
              </h6>
            </div>
            <div className="card-body">
              <p>
                SB Admin 2 makes extensive use of Bootstrap 4 utility
                classNamees in order to reduce CSS bloat and poor page
                performance. Custom CSS classNamees are used to create custom
                components and custom utility classNamees.
              </p>
              <p className="mb-0">
                Before working with this theme, you should become familiar with
                the Bootstrap framework, especially the utility classNamees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcase;
