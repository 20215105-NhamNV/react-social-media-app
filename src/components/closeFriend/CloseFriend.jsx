import "./closeFriend.css";

const CloseFriend = ({ user }) => {
    return (
        <li className="sidebar-friend" >
            <img className="sidebar-friend-img" src={user.profilePicture} alt='friend' />
            <span className="sidebar-friend-name">{user.username}</span>
        </li>
    )
}

export default CloseFriend