import { MdPermMedia, MdLocationOn, MdEmojiEmotions } from 'react-icons/md'
import { BiSolidTag } from 'react-icons/bi'
import Posts from '../posts/Posts';
const BodyCenter = () => {
    return (<div className="bodyCenter">
        <div className="bodyCenterTop">
            <div className='shareTextProfile'>
                <img src="/assets/people/1.jpg" alt="" className="bodyCenterProfileImg" />
                <input placeholder="What is in your mind?" className='whatInMind' />

            </div>
            <hr />
            <div className="share">
                <div>  <MdPermMedia className='photoVideo' /><span>Photo or video</span></div>
                <div><BiSolidTag className="tag" /> <span>Tag</span></div>
                <div><MdLocationOn className='location' /><span>Location</span></div>
                <div><MdEmojiEmotions className='feeling' />  <span>Feelings</span></div>

            </div>

        </div>
        <div className="bodyCenterBottom">
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
        </div>

    </div>);
}

export default BodyCenter;