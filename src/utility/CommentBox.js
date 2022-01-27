import React from 'react'
import { useStateValue } from '../state/Provider';
import { Link } from "react-router-dom";
import PostDropdown from "./PostDropdown";
import {
    TextField,
    Button,
    Typography,
    Divider,
    Tooltip,
    Avatar,
    CircularProgress,
  } from "@material-ui/core";

  import db from "../firebase";


function CommentBox({key, profilePic, content,timestamp, username}) {

    const [{ user }, dispatch] = useStateValue(); 


    const handleDeleteComment =()=>{
        alert("delete");
    }


//     const handleDeleteComment = async (commentId) => {
//         await removeComment(selectedPost._id, commentId)
//           .then((res) => {
//             listComments();
//             Notiflix.Notify.Success("Deleted !");
//           })
//           .catch((err) => console.log({ Error: err }));
//           db.collection("comments").where("id", "==", commentId).get()
//          .then(querySnapshot => {
//               querySnapshot.docs[0].ref.delete();
//           }); 



// });
    //   };
    
    return (
           
        <div className="comments-container">
                            <div className="comment-div">
                              <div style={{ display: "flex" }}>
                                <Avatar
                                  srcc={profilePic}
                                  style={{ marginRight: "1rem" }}
                                >
                                  {!profilePic &&
                                    username}
                                </Avatar>

                                <div className="comment">
            
                
                                 <div className="comment-username-delete">
                                    <Typography
                                      color="primary"
                                      className="comment-username"
                                      variant="h6"
                                    >
                                      <Link
                                        style={{
                                          textDecoration: "none",
                                          color: "#1771E6",
                                        }}
                                        to={`/profile`}
                                      >
                                        {username}
                                      </Link>
                                    </Typography>
                                    {(user.displayName === username ) && (
                                        <PostDropdown
                                          post={content}
                                          handleDelete={handleDeleteComment}
                                        />
                                      )}
                                  </div>

                                  <Typography
                                    color="textSecondary"
                                    variant="caption"
                                  >
                               {new Date(timestamp?.toDate()).toUTCString()}
                                  </Typography>
                                  <div className="comment-content">
                                    <Typography
                                      color="textPrimary"
                                      variant="subtitle1"
                                      className="comment-content-text"
                                    >
                                      {content}
                                    </Typography>
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                         
                     
                 );
   
}

export default CommentBox
