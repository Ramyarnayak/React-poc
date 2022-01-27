import React, { useEffect, useState } from 'react'
import './Feed.css'
import db from './../firebase'
import MessageSender from './MessageSender/MessageSender'
import Post from './Post/Post'
import Comments  from '../utility/Comments'
import StoryReel from './StoryReel/StoryReel'

function Feed() {

    const [posts, setPosts] = useState([]);


    const [postUsername, setPostUsername] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openComments, setOpenComments] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
  
//Fetching data from collection and listens any change in the collection(database)
    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
            setPosts(
              snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
            )
          );
    }, []);

    return (
      <div className="feed">
        {/* StoryReel */}
        <StoryReel />

        {/* MessageSender */}
        <MessageSender  posts={posts}/>

        {/* Post */}
        {posts.map((post) => (
     
          <Post

            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
            post1={post.data}
          />




       
   
    

        ))}

      </div>
    );
}

export default Feed

