import { ReactComponent as ImageIcon } from "../../assets/Image_Icon.svg";
import { ReactComponent as VideoIcon } from "../../assets/Video_Icon.svg";
import { ReactComponent as AudioIcon } from "../../assets/Mic_Icon.svg";
import "./Toolbar.style.css";
import FileUpload from "../fileUpload/FileUpload.jsx";
import { Audio, Image, Video } from "../../constants/editor.js";

const Toolbar = ({}) => {
  return (
    <div className="toolbar_container">
      {/* <ImageIcon /> */}
      <FileUpload fileType={Image} icon={<ImageIcon className="icon" />} />
      <FileUpload fileType={Video} icon={<VideoIcon className="icon" />} />
      <FileUpload fileType={Audio} icon={<AudioIcon className="icon" />} />
    </div>
  );
};

export default Toolbar;
