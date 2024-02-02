import "./topBar.css";
import { FaSearch } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { IoPeople, IoNotificationsSharp } from "react-icons/io5";
import { TbSocial } from "react-icons/tb";
import { Link } from "react-router-dom";
import userImg from "../../image/p1.jpeg";
const TopBar = ({ setIsShowMessage }) => {
  return (
    <div className="topBar">
      <div className="topBarLeft">
        <div className="logo">
          <TbSocial className="logoIcon" />
          <Link to="/home" className="topBarLogo">
            EtioBook
          </Link>
        </div>
      </div>
      <div className="topBarCenter">
        <div className="topBarSearch">
          <div className="searchIcon">
            <FaSearch />
          </div>
          <input placeholder="Search for friends" className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarRightMEssage">
          <div className="message">
            <BiMessageDetail
              className="topBarIcon"
              onClick={() => setIsShowMessage(true)}
            />
            <span className="messageCounter">3</span>
          </div>
        </div>
        <div className="topBarNotification">
          <div className="notification">
            <IoNotificationsSharp className="topBarIcon" />
            <span className="notificationCounter">8</span>
          </div>
        </div>
        <div className="topBarRightFriendRequest">
          <div className="friendRequest">
            <IoPeople className="topBarIcon" />
            <span className="friendRequestCounter">15</span>
          </div>
        </div>
        <div className="topBarRightProfile"></div>
        <Link to="/profile">
          <img src={userImg} alt="" className="profilePicture" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
