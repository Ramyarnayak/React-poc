import React, { useContext, useEffect, useState } from "react";import './Post.css'

// Icons
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ThumbUp, ChatBubbleOutline, AccountCircle, NearMe, ExpandMoreOutlined } from '@material-ui/icons';
// context api
import { useStateValue } from '../../state/Provider'
import Comments from "../../utility/Comments";

function Post( {profilePic, image, username, timestamp, message, key, post1}) {


  const [{ user }, dispatch] = useStateValue(); 
  const [openComments, setOpenComments] = useState(false);
  const [postUsername, setPostUsername] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);


    return (
      <div className="post">
        <div className="post_top">
          <Avatar src={profilePic} className="post_avatar" />
          <div className="post_topInfo">
            <h3>{username}</h3>
            <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
          </div>
        </div>
        <div className="post_bottom">
          <p>{message}</p>
        </div>

        <div className="post_image">
          <img src={image} alt="" />
        </div>
        <div className="post_options">
          <div className="post_option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post_option"  onClick={()=>{
           
           setOpenComments(true);
        }}>
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post_option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post_option">
            <AccountCircleIcon />
            <ExpandMoreIcon/>
          </div>
        </div>
        {openComments && (
   <div
   onClick={()=>{
 setSelectedPost(message);
     setPostUsername(user);  
 }}>
  <Comments
  post_id = {key}
  open={openComments}
  setOpen={setOpenComments}
  postUsername={username}
  selectedPost={selectedPost}
  />
  </div>)}
      </div>
    );
}

export default Post
