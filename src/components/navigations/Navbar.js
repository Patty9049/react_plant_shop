import React from "react";
import { routes } from "../../routes/";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={routes.home}>Home</Link>
        </li>
        <li>
          <Link to={routes.products}>Products</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        <li>
          <button>cart</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
