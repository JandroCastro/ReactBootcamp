import React from "react";
import CartIcon from "../../icons/CartIcon.svg";
import LikeIcon from "../../icons/LikeIcon.svg";
import UserIcon from "../../icons/UserIcon.svg";
import ThemeIcon from "../../icons/ThemeIcon.svg";

import { useCart } from "../../hooks/useCart";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router-dom";

function IconsList({ onClickCartIcon }) {
  const whiteIconStyle = { filter: "invert(100%)" };
  const { cartItems } = useCart();
  const { toggleTheme } = useTheme();

  const cartItemCount = cartItems?.length;

  return (
    <ul className="user-icons">
      <Link to={"/login"}>
        <li className="user-icon">
          <img src={UserIcon} alt="" style={whiteIconStyle} />
        </li>
      </Link>
      <li className="like-icon">
        <img src={LikeIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="theme-icon" onClick={() => toggleTheme()}>
        <img src={ThemeIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="cart-icon" onClick={onClickCartIcon}>
        <Link to={"/cart"}>
          <img src={CartIcon} alt="" style={whiteIconStyle} />
          {cartItemCount > 0 && (
            <span className="cart-count">{cartItemCount}</span>
          )}
        </Link>
      </li>
    </ul>
  );
}

export default IconsList;
