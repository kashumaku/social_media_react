import './posts.css'
import { AiOutlineLike, AiFillHeart } from 'react-icons/ai'
import { FaCommentDots } from 'react-icons/fa6'
const Posts = () => {
    return (
        <div className="posts">
            <div className="postsTop">
                <div className="postUser">
                    <img src="/assets/people/4.jpg" alt="" className="posterProfileImg" />
                    <div>
                        <span className="profileName">Absalat Yalew</span>
                        <div className="time">3 days ago</div>
                    </div>
                </div>

            </div>
            <div className="postsCenter">
                <img src="/assets/people/post.jfif" alt="" className="postsImg" />
            </div>
            <div className="postsBottom">
                <div className="likePost">
                    <AiOutlineLike className='likeIcon like' />
                    <AiFillHeart className='likeIcon' />

                </div>
                <div className="comment"><FaCommentDots className='comments' />9 comments</div>
            </div>

        </div>);
}

export default Posts;