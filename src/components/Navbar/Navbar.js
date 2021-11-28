import React from "react";
import Items from "./Items";
import rocket from "../Showcase/../../img/undraw_rocket.svg";

const Navbar = () => {
  const navbarItems = [
    { option: "Interface", elements: ["Components", "Utilities"] },
    { option: "Addons", elements: ["Pages", "Charts", "Tables"] },
  ];
  return (
    <div style={{ backgroundColor: "#264dc1" }}>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr className="sidebar-divider my-0"></hr>

        {/* common */}
        <li className="nav-item active">
          <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {navbarItems.map((item, key) => {
          return <Items key={key} item={item} />;
        })}

        <hr className="sidebar-divider d-none d-md-block"></hr>
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src={rocket}
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a className="btn btn-success btn-sm">Upgrade to Pro!</a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
