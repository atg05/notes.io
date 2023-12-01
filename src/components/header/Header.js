import "./Header.style.css";
import React, { useContext } from "react";
import Button from "../common/button/Button";
import { ReactComponent as PlusIcon } from "../../assets/Plus_Icon.svg";
import { ReactComponent as BackIcon } from "../../assets/Back_Icon.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { EditorContext } from "../../context/EditorContext";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { saveContent, canSave } = useContext(EditorContext);

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
      {location.pathname.includes("/editor") ? (
        <BackIcon className="back_icon" onClick={handleBackButton} />
      ) : (
        <p className="title">Notes</p>
      )}
      {location.pathname.includes("/editor") ? (
        <Button
          className={"btn save-btn"}
          disabled={!canSave}
          onClick={async () =>
            await saveContent().then(() => {
              navigate("/");
            })
          }
        >
          Save
        </Button>
      ) : (
        <Button className={"btn new-btn"} onClick={handleNewButtonClick}>
          <PlusIcon className="icon_header" />
          New
        </Button>
      )}
    </div>
  );
};

export default Header;
