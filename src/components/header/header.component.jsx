import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { ReactComponent as Logo } from '../../assets/4.1 crown.svg'
import './header.styles.css';

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {/* <Link className="option" to="/shop">SHOP</Link> */}
      {/* <Link className="option" to="/shop">SHOP</Link> */}

    </div>
  </div>
)
export default Header