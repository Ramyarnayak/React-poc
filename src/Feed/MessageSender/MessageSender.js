import React, { useEffect, useState } from "react";
import './MessageSender.css'
import firebase from 'firebase'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Comments  from '../../utility/Comments';
// icons
import { Avatar } from '@material-ui/core'

// context api
 import { useStateValue } from '../../state/Provider'

// database
import db from '../../firebase'

function MessageSender({posts}) {
    const [{ user }, dispatch] = useStateValue();
    const [input,setInput] = useState("");  
    const [imageUrl, setImageUrl] = useState("");  
    const [openComments, setOpenComments] = useState(false);
    const [postUsername, setPostUsername] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
   
    useEffect(() => {
      if (openComments) {
        document.querySelector("body").style.overflow = "hidden";
      } else {
        document.querySelector("body").style.overflow = "scroll";
      }
    }, [openComments]);


  const handleSubmit = (e) => {
    e.preventDefault();
    //Some DB stuff
    db.collection('posts').add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // local time of location
    profilePic: user.photoURL,
    username: user.displayName,
    image: imageUrl,
  
  });
  
    setInput("");   // After enter, set it blank again the text box
    setImageUrl("");
  };
  
      return (
        <div className="messageSender">
          <div className="messageSender_top">
            <Avatar src={user.photoURL}/>
            <form>
              <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
                className="messageSender_input"
                placeholder={`What's on your mind, ${user.displayName}?`}
              />
              <input 
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Image URL (Optional)" />
              <button onClick={handleSubmit} type="submit">
                Hidden submit
              </button>
            </form>
          </div>
          <div className="messageSender_bottom">
            <div className="messageSender_option">
              <VideocamIcon style={{ color: "red" }} />
              <h3>Live Video</h3>
            </div>
            <div className="messageSender_option">
              <PhotoLibraryIcon style={{ color: "green" }} />
              <h3>Photo/Video</h3>
            </div>
            <div className="messageSender_option" 
            >
              <InsertEmoticonIcon style={{ color: "orange" }} />
              <h3>Add Comments</h3>
            </div>
          </div>
        {openComments && posts.map((post) =>(
         <div
          onClick={()=>{
         setSelectedPost(post.data);
         setPostUsername(post.data.username);
          }}>
          <Comments
   post_id={post.id}
  open={openComments}
  setOpen={setOpenComments}
  postUsername={post.data.username}
  selectedPost={selectedPost}
  />
  </div>))} 
      
        </div>
      );
          }
  export default MessageSender
  