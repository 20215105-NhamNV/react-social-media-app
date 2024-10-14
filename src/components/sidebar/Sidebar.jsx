import "./sidebar.css";
import { RssFeed, Chat, PlayCircle, Group, Bookmark, HelpOutline, WorkOutline, DateRange, School } from '@mui/icons-material';
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="siderbar-wrapper">
                <ul className="sidebar-list">
                    <li className="sidebar-list-item">
                        <RssFeed className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Feed</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Chat className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Chat</span>
                    </li>
                    <li className="sidebar-list-item">
                        <PlayCircle className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Video</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Group className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Group</span>
                    </li>
                    <li className="sidebar-list-item">
                        <Bookmark className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Bookmark</span>
                    </li>
                    <li className="sidebar-list-item">
                        <HelpOutline className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Question</span>
                    </li>
                    <li className="sidebar-list-item">

                        <WorkOutline className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Work</span>
                    </li>
                    <li className="sidebar-list-item">
                        <DateRange className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Event</span>
                    </li>
                    <li className="sidebar-list-item">
                        <School className="sidebar-icon" />
                        <span className="sidebar-list-item-text">Course</span>
                    </li>
                </ul>
                <button className="sidebar-button">Show more</button>
                <hr className="sidebar-hr" />
                <ul className="sidebar-friend-list">
                    {Users.map(u => <CloseFriend key={u.id} user={u} />)}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
