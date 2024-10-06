import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

const Topbar = () => {
    return (
        <div className="topbar-container">
            <div className="topbar-left">
                <div className="topbar-logo">
                    <span>Social media</span>
                </div>
            </div>
            <div className="topbar-center">
                <div className="topbar-search">
                    <Search className="topbar-icon-search" />
                    <input className="topbar-search-input" placeholder="Search from friend post or video" />
                </div>
            </div>
            <div className="topbar-right">
                <div className="topbar-links">
                    <span className="topbar-link">Homepage</span>
                    <span className="topbar-link">Timeline</span>
                </div>
                <div className="topbar-icons">
                    <div className="topbar-icon-item">
                        <Person />
                        <span className="topbar-notification-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Chat />
                        <span className="topbar-notification-badge">1</span>
                    </div>
                    <div className="topbar-icon-item">
                        <Notifications />
                        <span className="topbar-notification-badge">1</span>
                    </div>
                </div>
                <img className="topbar-avatar" src="/assets/Grosser_Panda.JPG" alt="avatar" />

            </div>

        </div>
    )
}

export default Topbar