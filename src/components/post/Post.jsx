import "./post.css";
import { MoreVert, ThumbUp, Favorite } from '@mui/icons-material';
import { Users } from "../../dummyData";
import { useState } from "react";


const Post = ({ post }) => {
    const [like, setLike] = useState(post.like);
    const [isLike, setIsLike] = useState(false);
    const likeHandle = () => {
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike);
    }
    return (
        <div className="post-container">
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img className="post-profile-img" src={Users.filter(u => u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="post-user-name">{Users.filter(u => u.id === post.userId)[0].username}</span>
                        <span className="post-date">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVert />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-text">{post?.desc} </span>
                    <img className="post-img" src={post.photo} alt="" />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <ThumbUp className="post-like-icon" fontSize="small" onClick={likeHandle} />
                        <Favorite className="post-favorite-icon" fontSize="small" onClick={likeHandle} />
                        <span className="post-like-counter">{like} people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <span className="post-comment-text">{post.comment} comment</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
