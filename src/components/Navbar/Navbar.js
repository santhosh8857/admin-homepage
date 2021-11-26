import React from "react";
import Items from "./Items";

const Navbar = () => {
  const navbarItems = [
    { option: "Interface", elements: ["Components", "Utilities"] },
    { option: "Addons", elements: ["Pages", "Charts", "Tables"] },
  ];
  return (
    <div>
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr class="sidebar-divider my-0"></hr>

        {/* common */}
        <li class="nav-item active">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {navbarItems.map((item, key) => {
          return <Items key={key} item={item} />;
        })}

        <hr class="sidebar-divider d-none d-md-block"></hr>
        <div class="text-center d-none d-md-inline">
          <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

        <div class="sidebar-card d-none d-lg-flex">
          <p class="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a class="btn btn-success btn-sm">Upgrade to Pro!</a>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
