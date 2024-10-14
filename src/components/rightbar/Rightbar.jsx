import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../online/Online";
const Rightbar = () => {
    return (
        <div className="rightbar-container">
            <div className="rightbar-wrapper">
                <div className="birthday-container">
                    <img className="birthday-img" src="/assets/gift.jpg" alt="" />
                    <span className='birthday-text'><b>Nam Nguyen</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img className="rightbar-ad" src="/assets/advertisement.jpg" alt="" />
                <h4 className="rightbar-title">Online friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map(u => <Online key={u.id} user={u} />)}
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;
