import { MdPermMedia, MdLocationOn, MdEmojiEmotions } from "react-icons/md";
import { BiSolidTag } from "react-icons/bi";
import Posts from "../posts/Posts";

import userImg from "../../image/p1.jpeg";
import { posts } from "../../db/post";
const BodyCenter = () => {
  return (
    <div className="bodyCenter">
      <div className="bodyCenterTop">
        <div className="shareTextProfile">
          <img src={userImg} alt="" className="bodyCenterProfileImg" />
          <input placeholder="What is in your mind?" className="whatInMind" />
        </div>
        <hr />
        <div className="share">
          <div>
            {" "}
            <MdPermMedia className="photoVideo" />
            <span>Photo or video</span>
          </div>
          <div>
            <BiSolidTag className="tag" /> <span>Tag</span>
          </div>
          <div>
            <MdLocationOn className="location" />
            <span>Location</span>
          </div>
          <div>
            <MdEmojiEmotions className="feeling" /> <span>Feelings</span>
          </div>
        </div>
      </div>
      <div className="bodyCenterBottom">
        {
          //  ({ name, img, lastSeen, post, like, comment }
          posts.map((post) => (
            <Posts
              img={post.userImg}
              name={post.userName}
              lastSeen={post.lastSeen}
              post={post.post}
              like={post.like}
              comment={post.comment}
            />
          ))
        }
      </div>
    </div>
  );
};

export default BodyCenter;
