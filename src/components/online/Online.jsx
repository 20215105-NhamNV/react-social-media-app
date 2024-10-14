import "./online.css";

const Online = ({ user }) => {
    return (
        <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
                <img
                    className="rightbar-profile-img"
                    src={user.profilePicture}
                    alt="" />
                <div className="rightbar-online"></div>
            </div>
            <span className="rightbar-user-name">{user.username}</span>
        </li>
    );
}

export default Online;
