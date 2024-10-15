import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
const Rightbar = ({ profile }) => {
    console.log(profile);
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthday-container">
                    <img className="birthday-img" src="/assets/gift.jpg" alt="" />
                    <span className='birthday-text'><b>Nam Nguyen</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img className="rightbar-ad" src="/assets/advertisement.jpg" alt="" />
                <h4 className="rightbar-title">Online friends</h4>
                <ul className="rightbar-friend-list">
                    {Users.map(u => <Online key={u.id} user={u} />)}
                </ul>
            </>
        );
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbar-title">User information</h4>
                <div className="rightbar-info">
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">City:</span>
                        <span className="rightbar-info-value">New york</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">From:</span>
                        <span className="rightbar-info-value">Vietnam</span>
                    </div>
                    <div className="rightbar-info-item">
                        <span className="rightbar-info-key">Relationship:</span>
                        <span className="rightbar-info-value">single</span>
                    </div>
                </div>
                <h4 className="rightbar-title">User friends</h4>
                <div className="rightbar-followings">
                    <div className="rightbar-following">
                        <img
                            className="rightbar-following-img"
                            src="assets/image4.jpg"
                            alt="" />
                        <span className="rightbar-following-name"> Nham</span>
                    </div>
                    <div className="rightbar-following">
                        <img
                            className="rightbar-following-img"
                            src="assets/image1.jpg"
                            alt="" />
                        <span className="rightbar-following-name"> Nham</span>
                    </div>
                    <div className="rightbar-following">
                        <img
                            className="rightbar-following-img"
                            src="assets/image2.jpg"
                            alt="" />
                        <span className="rightbar-following-name"> Nham</span>
                    </div>
                    <div className="rightbar-following">
                        <img
                            className="rightbar-following-img"
                            src="assets/image4.jpg"
                            alt="" />
                        <span className="rightbar-following-name"> Nham</span>
                    </div>
                    <div className="rightbar-following">
                        <img
                            className="rightbar-following-img"
                            src="assets/image4.jpg"
                            alt="" />
                        <span className="rightbar-following-name"> Nham</span>
                    </div>
                    <div className="rightbar-following">
                        <img
                            className="rightbar-following-img"
                            src="assets/image4.jpg"
                            alt="" />
                        <span className="rightbar-following-name"> Nham</span>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="rightbar-container">
            <div className="rightbar-wrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}

export default Rightbar;
