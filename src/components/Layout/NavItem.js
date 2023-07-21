import React from "react";
import { Link } from "react-router-dom";
import './NavItem.css'

export default function NavItem({
  dropdown = false,
  item,
  path = "",
  logo = false,
}) {
  if (dropdown) {
    return (
      <li className="nav-item dropdown">
        <button
          id="nav-dropdown"
          className="btn btn-light dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {item}
        </button>
        <ul className="dropdown-menu"></ul>
      </li>
    );
  } else if (logo) {
    return (
      <li className="nav-item">
        <Link to={"/" + path}>{item}</Link>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <Link className="btn btn-light" to={"/" + path}>
        {item}
      </Link>
    </li>
  );
}
