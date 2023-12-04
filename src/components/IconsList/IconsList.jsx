import React from "react";
import UserIcon from "../../icons/CartIcon.svg";
import LikeIcon from "../../icons/LikeIcon.svg";
import CartIcon from "../../icons/UserIcon.svg";

function IconsList() {
  const whiteIconStyle = { filter: "invert(100%)" };

  return (
    <ul className="user-icons">
      <li className="user-icon">
        <img src={UserIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="like-icon">
        <img src={LikeIcon} alt="" style={whiteIconStyle} />
      </li>
      <li className="cart-icon">
        <img src={CartIcon} alt="" style={whiteIconStyle} />
      </li>
    </ul>
  );
}

export default IconsList;
