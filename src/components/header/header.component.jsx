import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { createStructuredSelector } from "reselect";

import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selection";

import { ReactComponent as Logo } from "../../assets/4.1 crown.svg";
import "./header.styles.css";



const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          {" "}
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown/>}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);
