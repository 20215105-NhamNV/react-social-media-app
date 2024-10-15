import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
const Profile = () => {
    return (
        <>
            <Topbar />
            <div className="profile-container">
                <Sidebar />
                <div className="profile-right">
                    <div className="profile-right-top">
                        <div className="profile-cover">
                            <img
                                className="profile-cover-photo"
                                src="/assets/image1.jpg"
                                alt="" />
                            <img
                                className="profile-user-img"
                                src="/assets/image2.jpg"
                                alt="" />
                        </div>
                        <div className="profile-info">
                            <h4 className="profle-info-name">
                                Nguyen Van
                            </h4>
                            <span className="profileInfoDesc">
                                Chi muon buong loi cau chao
                            </span>
                        </div>
                    </div>
                    <div className="profile-right-bottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile