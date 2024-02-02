import { MdRssFeed, MdOutlineWork } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsChatSquareTextFill, BsCalendar2Event } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillBookmarkFill, BsQuestionOctagon } from "react-icons/bs";
import { SiCoursera } from "react-icons/si";
import { Link } from "react-router-dom";

import { friends } from "../../db/friends";
const BodyLeft = () => {
  return (
    <div className="bodyLeft">
      <ul className="bodyLeftMenu">
        <li>
          {" "}
          <MdRssFeed className="bodyLeftIcons" />
          <span>Feeds</span>{" "}
        </li>
        <li>
          {" "}
          <BsChatSquareTextFill className="bodyLeftIcons" />
          <span>Chats</span>{" "}
        </li>
        <li>
          {" "}
          <BiSolidVideos className="bodyLeftIcons" />
          <span>Videos</span>{" "}
        </li>
        <li>
          {" "}
          <FaUserGroup className="bodyLeftIcons" /> <span>Groups</span>
        </li>
        <li>
          {" "}
          <BsFillBookmarkFill className="bodyLeftIcons" />{" "}
          <span>Bookmarks</span>
        </li>
        <li>
          {" "}
          <BsQuestionOctagon className="bodyLeftIcons" />
          <span>Questions</span>{" "}
        </li>
        <li>
          <MdOutlineWork className="bodyLeftIcons" /> <span>Jobs</span>{" "}
        </li>
        <li>
          {" "}
          <BsCalendar2Event className="bodyLeftIcons" />
          <span>Events</span>{" "}
        </li>
        <li>
          {" "}
          <SiCoursera className="bodyLeftIcons" />
          <span>Courses</span>{" "}
        </li>
        <li>
          {" "}
          <Link to="/login" className="logOut">
            <RiLogoutCircleRLine className="bodyLeftIcons" />
            <span>Log out</span>{" "}
          </Link>
        </li>
      </ul>
      <button className="showMore">Show More</button>
      <hr className="bodyLeftHr" />

      <div className="friends">
        <h3>Friends</h3>
        {friends.map((friend) => (
          <ul>
            <li>
              <div className="friend">
                <img src={friend.profile} alt="" className="friendsImg" />
                <span className="friendsName">{friend.name}</span>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default BodyLeft;
