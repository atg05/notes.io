import "./Header.style.css";
import React from "react";
import Button from "../common/button/Button";
import { ReactComponent as PlusIcon } from "../../assets/Plus_Icon.svg";
import { ReactComponent as BackIcon } from "../../assets/Back_Icon.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNewButtonClick = () => {
    navigate("/editor");
  };

  const handleBackButton = () => {
    const confirmDiscard = window.confirm("Do you really want to discard?");

    if (confirmDiscard) {
      // User clicked "OK" (true)
      navigate("/");
    } else {
    }
  };

  return (
    <div className="header-container">
      {location.pathname === "/editor" ? (
        <BackIcon className="back_icon" onClick={handleBackButton} />
      ) : (
        <p className="title">Notes</p>
      )}
      {location.pathname === "/editor" ? (
        // <Button disabled={!canSave} onClick={() => saveContent()}>
        <Button>Save</Button>
      ) : (
        <Button onClick={handleNewButtonClick}>
          <PlusIcon className="icon_header" />
          New
        </Button>
      )}
    </div>
  );
};

export default Header;
