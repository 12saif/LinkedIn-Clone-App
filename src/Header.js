import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <h1>This is a Header</h1>
      <div className="header__left">
        <img src="" alt="" />
        <div header__serch>
          {/* SearchIcon */}
          <input type="text" />
        </div>
      </div>
      <div className="header__right">right</div>
    </div>
  );
}

export default Header;
