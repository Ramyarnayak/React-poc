import React, { useState } from 'react';
import './Friend.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import { Button } from '@material-ui/core';


import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
function Friend() {
  const PAGE_ADD_FRIENDS='add-friends';
  const PAGE_YOUR_FRIENDS='your-friends';
  const [your_friends,setYourFriend]=useState([
    {
      name:"Rakshitha"
    },
    {
      name:"Devadiga"
    },
    {
      name:"Shravya"
    },
    {
      name:"Vibha"
    },
    {
      name:"Pawan"
    },
    {
      name:"Sairam"
    },
    {
      name:"Sanjay"
    }
  ]);
  const [page,setPage]=useState(PAGE_ADD_FRIENDS);
  const[add_friends,setAddFriends]=useState([
    {
      name:"Ram"
    },
   {
    name:"Raj"
   },
   {
     name:"Tej"
   },
   {
     name:"Khushi"
   },
   {
     name:"Sharath"
   },
   {
     name:"Sushanth"
   },
   {
     name:"Karthik"
   },
   {
     name:"Nikhitha"
   }


  ]);
  const addToFriends=(add_friend)=>{
    setAddFriends(add_friends.filter((p)=> (p!==add_friend)))
    setYourFriend([...your_friends,{...add_friend}]);
    alert(add_friend.name+" is added as your friend");
  
  }; 
  const removeFromFriends=(friendToRemove)=>{
    setYourFriend(
        your_friends.filter((add_friend)=> add_friend!==friendToRemove)
    );
    
    alert(friendToRemove.name+" is removed from your friend's list");
  };
  const navigateTo=(nextPage)=>{
    setPage(nextPage);
  };
  const renderaddFriends=()=>(
    <>
    <div className='friends'>
      
        
    {add_friends.map((add_friend,id)=>(
     <div className="friend" key={id}>
    
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
      <Paper >
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar>{add_friend.name.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{add_friend.name}</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>

            <Button variant="contained" fill noWrap onClick={()=>{addToFriends(add_friend)}}>Add Friend</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>




   </div>
   
    ))}
  
    </div>
    
    </>

  );
  const renderyourFriends=()=>(
    <>
    
    <div className="myfriends">

    {your_friends.map((your_friends,id)=>(
      <div className="friend" key={id}>
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
      <Paper >
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar>{your_friends.name.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{your_friends.name}</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>

            <Button variant="contained" noWrap onClick={()=>removeFromFriends(your_friends)}>UnFriend</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>

    
    </div>
  
    ))}
    </div>

      </>

  );
  const navStyle=
        {
            color:'white'
        };
    return (
      <Router>
      <div className="App">
     
        <header>
        <Switch>
          <nav>
          <ul className="nav-links">
           
          <Route path="/addfriends" component={renderyourFriends}/>
            <Route path="/yourfriends" component={renderaddFriends}/>
            <Link style={navStyle} to="your-friends">
          < li  onClick={()=>navigateTo(PAGE_YOUR_FRIENDS)}>Your Friends({your_friends.length})</li>
          </Link>
          <Link style={navStyle} to="add-friends">
          <li onClick={()=>navigateTo(PAGE_ADD_FRIENDS)}>Add Friends</li>
          </Link>
          
          
          </ul>
          </nav>
          </Switch>
        </header>
        

        {page===PAGE_ADD_FRIENDS && renderaddFriends()}
        {page===PAGE_YOUR_FRIENDS && renderyourFriends()}
        </div>
        </Router>
  );
}

export default Friend;
