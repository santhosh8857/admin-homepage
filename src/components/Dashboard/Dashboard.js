import React from "react";
import Card from "./Card";

const Dashboard = () => {
  const dashboardItems = [
    {
      color: "primary",
      title: "EARNINGS (MONTHLY)",
      value: "$40,000",
      icon: "fas fa-calendar",
    },
    {
      color: "success",
      title: "Earnings (Annual)",
      value: "$215,000",
      icon: "fas fa-dollar-sign",
    },
    {
      color: "info",
      title: "Tasks",
      value: "50%",
      icon: "fas fa-clipboard",
    },
    {
      color: "warning",
      title: "Pending Requests",
      value: "18",
      icon: "fas fa-comments",
    },
  ];
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      <div className="row">
        {dashboardItems.map((item, key) => {
          return <Card item={item} key={key} />;
        })}
      </div>
    </>
  );
};

export default Dashboard;
