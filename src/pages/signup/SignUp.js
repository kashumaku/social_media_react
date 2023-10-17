
import { useNavigate } from "react-router-dom";
import "./signup.css"
const SignUp = () => {
    const navigate = useNavigate()
    return (
        <div className="signUp">
            <div className="signUpLeft">
                <div>
                    <span className="logo">
                        Ethiobook
                    </span>
                    <span className="slogan">
                        Connect securly to the world!
                    </span></div>
            </div>
            <div className="signUpRight">
                <h1>Sign Up</h1>
                <div className="signUpInputs">
                    <input placeholder="Enter your firstname" className="firstName" />
                    <input placeholder="Enter your lastname" className="lastName" />
                    <input placeholder="Enter your phone number" className="phone" />
                    <input placeholder="Enter your email" className="email" />
                    <input placeholder="Enter new password" className="password" />
                    <input placeholder="Confirm password" className="password" />

                </div>
                <button className="signUpbtn">Sign Up</button>

                <button className="loginbtn" onClick={() => navigate("/login")}>Log In</button>
            </div>
        </div>
    );
}

export default SignUp;