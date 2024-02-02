import "./posts.css";
import { AiOutlineLike, AiFillHeart } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa6";
const Posts = ({ name, img, lastSeen, post, like, comment }) => {
  return (
    <div className="posts">
      <div className="postsTop">
        <div className="postUser">
          <img src={img} alt="" className="posterProfileImg" />
          <div>
            <span className="profileName">{name}</span>
            <div className="time">{lastSeen} days ago</div>
          </div>
        </div>
      </div>
      <div className="postsCenter">
        <img src={post} alt="" className="postsImg" />
      </div>
      <div className="postsBottom">
        <div className="likePost">
          {like}
          <AiOutlineLike className="likeIcon like" />
          <AiFillHeart className="likeIcon" />
        </div>
        <div className="comment">
          <FaCommentDots className="comments" />
          {comment} comments
        </div>
      </div>
    </div>
  );
};

export default Posts;
