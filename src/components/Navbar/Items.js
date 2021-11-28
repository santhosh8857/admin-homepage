import React from "react";

const Items = ({ item }) => {
  const icons = (element) => {
    if (element === "Components") return "fas fa-fw fa-cog";
    if (element === "Utilities") return "fas fa-fw fa-wrench";
    if (element === "Charts") return "fas fa-fw fa-chart-area";
    if (element === "Pages") return "fas fa-fw fa-folder";
    if (element === "Tables") return "fas fa-fw fa-table";
  };
  return (
    <>
      <hr className="sidebar-divider"></hr>
      <div className="sidebar-heading">{item.option}</div>
      {item.elements.map((element, key) => {
        return (
          <li key={key} className="nav-item">
            {element === "Charts" || element === "Tables" ? (
              <a className="nav-link" href="#">
                <i className={icons(element)}></i>
                <span>{element}</span>
              </a>
            ) : (
              <a className="nav-link collapsed" href="#" data-toggle="collapse">
                <i className={icons(element)}></i>
                <span>{element}</span>
              </a>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Items;
