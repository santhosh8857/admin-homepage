import React from "react";

const Header = () => {
  return (
    <div id="content">
      <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Search */}
        <form class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div class="input-group">
            <input
              type="text"
              class="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button">
                <i class="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* Header Navbar */}
        <ul class="navbar-nav ml-auto">
          {/* Notification */}
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-bell fa-fw"></i>
              <span class="badge badge-danger badge-counter">3+</span>
            </a>
          </li>

          {/* Messages */}
          <li class="nav-item dropdown no-arrow mx-1">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-envelope fa-fw"></i>
              <span class="badge badge-danger badge-counter">7</span>
            </a>
          </li>

          <div class="topbar-divider d-none d-sm-block"></div>

          {/* User Information */}
          <li class="nav-item dropdown no-arrow">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="mr-2 d-none d-lg-inline text-gray-600 small">
                Douglas McGee
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
