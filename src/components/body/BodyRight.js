import Message from "../message/message";

const BodyRight = ({ isShowMessage }) => {
    return (<div className="bodyRight">
        <div className="bodyRightTop">Active Friends</div>
        <div className="bodyRightBottom">
            <div className="activeFriends">

                <div>
                    <div className="activefriendProfile">
                        <img src="/assets/people/3.jpg" alt="" className="activeFriendsImg" />
                        <div className="activeStatus"></div>
                    </div>
                    <span className="activeUSerName">Edilawit </span>
                </div>
                <div>
                    <div className="activefriendProfile">
                        <img src="/assets/people/3.jpg" alt="" className="activeFriendsImg" />
                        <div className="activeStatus"></div>
                    </div>
                    <span className="activeUSerName">Edilawit </span>
                </div>
                <div>
                    <div className="activefriendProfile">
                        <img src="/assets/people/3.jpg" alt="" className="activeFriendsImg" />
                        <div className="activeStatus"></div>
                    </div>
                    <span className="activeUSerName">Edilawit </span>
                </div>
                <div>
                    <div className="activefriendProfile">
                        <img src="/assets/people/3.jpg" alt="" className="activeFriendsImg" />
                        <div className="activeStatus"></div>
                    </div>
                    <span className="activeUSerName">Edilawit </span>
                </div>
                <div>
                    <div className="activefriendProfile">
                        <img src="/assets/people/3.jpg" alt="" className="activeFriendsImg" />
                        <div className="activeStatus"></div>
                    </div>
                    <span className="activeUSerName">Edilawit </span>
                </div>
                <div>
                    <div className="activefriendProfile">
                        <img src="/assets/people/3.jpg" alt="" className="activeFriendsImg" />
                        <div className="activeStatus"></div>
                    </div>
                    <span className="activeUSerName">Edilawit </span>
                </div>
            </div>
        </div>



        <div className="showMessage">
            {isShowMessage && <Message />}
        </div>
    </div >);
}

export default BodyRight;