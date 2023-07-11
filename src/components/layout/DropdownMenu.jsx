import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      {name: "Login", path: "/login" },
      {name: "Home", path: "/" },
      {name:"Orders", path:"/myorders"},
      {name: "Contact", path: "/contact" },
      {name: "About", path: "/about" },
      {name:"Logout", path:"/login"}
      
    ];
    setNavLinks(navs);
  }, []);

  return (
    
      <nav>
          <div className="btn-group">
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
          </div>
      </nav>
   
  );
}

export default DropdownMenu;