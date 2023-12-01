import "./Header.style.css";
import React from "react";
import Button from "../common/button/Button";
import { ReactComponent as PlusIcon } from "../../assets/Plus_Icon.svg";
import { ReactComponent as BackIcon } from "../../assets/Back_Icon.svg";

const Header = () => {
  return (
    <div className="header_container">
      <BackIcon />
      <Button>
        <PlusIcon />
        NEW
      </Button>
    </div>
  );
};

export default Header;
