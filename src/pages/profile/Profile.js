import "./profile.css"
import TopBar from "../../components/tobar/TopBar";
import { Link } from "react-router-dom";

const Profile = () => {
    return (
        <div className="profile">
            <TopBar />
            <div className="profileTop">
                <img src="/assets/people/background.jfif" alt="" className="profileBackground" />
                <img src="/assets/people/1.jpg" alt="" className="profileImg" />
            </div>

            <div className="profileBottom">

                <ul className="profileDetail">
                    <Link to="#" className="editProfile">Edit Profile</Link>
                    <li className="name">Name: Kassahun Mekaku</li>
                    <li className="address">Address: Addis ababa</li>
                    <li className="email">Email: kassahun@gmil.com</li>
                    <li className="phoneNumber">Phone: +251912343565</li>
                    <li className="live">Live in Addis ababa</li>
                </ul>
            </div>

        </div>);
}

export default Profile;