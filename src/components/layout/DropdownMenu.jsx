import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarBs } from "react-bootstrap";


function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      {name: "Login", path: "/login" },
      {name: "Home", path: "/" },
      {name: "Menu", path: "/menu" },
      {name: "Orders", path:"/myorders"},
      {name: "About", path: "/about" },
      {name: "Contact", path: "/contact" }
    ];
    setNavLinks(navs);
  }, []);

  return (
    
      <NavbarBs>
            <button
              type="button"
              className="btn btn-dark dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
      </NavbarBs>
   
  );
}

export default DropdownMenu;