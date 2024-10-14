import "./feed.css";
import Share from "../share/Share";
import { Posts } from "../../dummyData";
import Post from "../post/Post"

const Feed = () => {
    return (
        <div className="feed-container">
            <Share />
            {Posts.map((p) => <Post key={p.id} post={p} />)}
        </div>
    );
}

export default Feed;
