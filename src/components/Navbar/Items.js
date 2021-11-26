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
      <hr class="sidebar-divider"></hr>
      <div class="sidebar-heading">{item.option}</div>
      {item.elements.map((element, index) => {
        return (
          <li index={index} class="nav-item">
            {element === "Charts" || element === "Tables" ? (
              <a class="nav-link" href="#">
                <i class={icons(element)}></i>
                <span>{element}</span>
              </a>
            ) : (
              <a class="nav-link collapsed" href="#" data-toggle="collapse">
                <i class={icons(element)}></i>
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
