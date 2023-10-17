import "./body.css"
import BodyCenter from "./BodyCenter";
import BodyLeft from "./BodyLeft";
import BodyRight from "./BodyRight";

const Body = ({ isShowMessage }) => {
    return (<div className="body">
        <div className="bodyLeftContainer">
            <BodyLeft />
        </div>
        <div className="bodyCenterContainer">
            <BodyCenter />
        </div>
        <div className="bodyRightContainer">
            <BodyRight isShowMessage={isShowMessage} />
        </div>
    </div>);
}

export default Body;