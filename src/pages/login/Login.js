import { useState } from "react";
import "./login.css"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [loginParams, setLoginParams] = useState({
        email: "",
        password: ""
    })
    const [warnning, setWarrning] = useState("")
    const navigate = useNavigate()
    const handleLogin = () => {
        const { email, password } = loginParams
        if ((email === "kassahun@gmail.com" || email === "0928962071") && password === "kassahun1234")
            navigate("/home")
        else
            setWarrning("Wrong email or password")


    }

    return (
        <div className="login">
            <div className="loginLeft">
                <div>
                    <span className="logo">
                        Ethiobook
                    </span>
                    <span className="slogan">
                        Connect securly to the world!
                    </span></div>
            </div>
            <div className="loginRight">
                <h1>Log In</h1>
                <div className="userlogo">
                    <img src="/assets/people/userlogo.jfif" alt="" />
                </div>
                {warnning && <span style={{ color: "red" }}>{warnning}</span>}
                <div className="loginInputs">
                    <input placeholder="Enter your Email or Phonenumber" onChange={(e) => setLoginParams((prev) => ({ ...prev, email: e.target.value }))} />
                    <input type="password" placeholder="Enter your password" onChange={(e) => setLoginParams((prev) => ({ ...prev, password: e.target.value }))} />
                </div>
                <button className="loginbtn" onClick={handleLogin}>Log In</button>
                <Link className="forgotpassword" to="#">forgot password?</Link>
                <button className="createAccount" onClick={() => navigate("/signup")}>Create New Account</button>
            </div>
        </div>
    );
}

export default Login;