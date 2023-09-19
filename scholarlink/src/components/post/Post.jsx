import React from 'react';
import "./post.scss";
import IconButton  from '@mui/material/IconButton';
import { Users } from "./../../data";
import  MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
import ThumbUp from '@mui/icons-material/ThumbUp';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutline from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import { Link } from 'react-router-dom';


const Post = ( { post } ) => {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to="/profile/userId" style={{textDecoration: "none"}}>
                        <img 
                         src={ Users.filter((u) => u.id === post.userId)[0].profilePicture } 
                         alt="" className="postProfileImg" 
                        />
                    </Link>
                    
                    <span className="postUserName">{ Users.filter((u) => u.id === post.userId)[0].username }</span>
                    <span className="postDate">{ post.date } </span>
                </div>
                <div className="postTopRight">
                    <IconButton>
                    <MoreVertIcon className="postVertButton" />
                    </IconButton>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText"> { post.body }</span>
                <img src= { post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite className="bottomLeftIcon" style={{ color: "red" }} />
                    <ThumbUp className="bottomLeftIcon" style={{ color: "#011631" }} />
                    <span className="postLikeCounter"> { post.like }</span>
                    
                </div>
                <div className="postBottomRight">
                <span className="postCommentText">
                        { post.comment } - comments - share </span>
                </div>
            </div>
            <hr className="footerHr" />
            <div className="postBottomFooter">
                <div className="postBottomFooterItem">
                    <ThumbUpOffAlt classame="footerIcon" />
                    <span className="footerText">Like</span>
                </div>
                <div className="postBottomFooterItem">
                    <ChatBubbleOutline classame="footerIcon" />
                    <span className="footerText">Comment</span>
                </div>
                <div className="postBottomFooterItem">
                    <ShareOutlined classame="footerIcon" />
                    <span className="footerText">Share</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Post;