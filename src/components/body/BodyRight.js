import Message from "../message/message";
import { activeFriends } from "../../db/activeFriends";

const BodyRight = ({ isShowMessage }) => {
  return (
    <div className="bodyRight">
      <div className="bodyRightTop">Active Friends</div>
      <div className="bodyRightBottom">
        <div className="activeFriends">
          {activeFriends.map((active) => (
            <div>
              <div className="activefriendProfile">
                <img src={active.profile} alt="" className="activeFriendsImg" />
                <div className="activeStatus"></div>
              </div>
              <span className="activeUSerName">{active.name} </span>
            </div>
          ))}
        </div>
      </div>

      <div className="showMessage">{isShowMessage && <Message />}</div>
    </div>
  );
};

export default BodyRight;
