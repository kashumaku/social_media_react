import { useState } from "react";
import Body from "../../components/body/Body";
import TopBar from "../../components/tobar/TopBar";

import "./home.css"
const Home = () => {

    const [isShowMessage, setIsShowMessage] = useState(false);
    console.log(isShowMessage)
    return (<div className="home">
        <div className="homeTopBar">
            <TopBar setIsShowMessage={setIsShowMessage} />
            <Body isShowMessage={isShowMessage} />

        </div>
    </div>);
}

export default Home;