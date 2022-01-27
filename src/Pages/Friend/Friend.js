import React, { useState } from 'react';
import './Friend.css';
import {Link} from 'react-router-dom';
import {BrowserRouter as Router,Switch,Route, Routes} from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import { Button } from '@material-ui/core';
import { ADD_FRIENDS, YOUR_FRIENDS } from './FriendsList';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



function Friend() {
  const PAGE_ADD_FRIENDS='add-friends';
  const PAGE_YOUR_FRIENDS='your-friends';
  const [your_friends,setYourFriend]=useState(YOUR_FRIENDS);
  const [page,setPage]=useState(PAGE_ADD_FRIENDS);
  const[add_friends,setAddFriends]=useState(ADD_FRIENDS);
  // const [filteredData,setFilteredData] = useState(add_friends);
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    let result2 =[];
    console.log(value);
    result = add_friends.filter((data) => {
    return data.name.search(value) != -1;
    });
    result2 = your_friends.filter((data) => {
      return data.name.search(value) != -1;
      });
    console.log(result)
    setAddFriends(result);
    setYourFriend(result2)
    }

  const addToFriends=(add_friend)=>{
    setAddFriends(add_friends.filter((p)=> (p!==add_friend)))
    setYourFriend([...your_friends,{...add_friend}]);
    alert(add_friend.name+ " is added as your friend");
  
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
      // <Router>
      <div className="App">
     
        <header>
      
        
        
          <nav>
          <ul className="nav-links">
           {/* <Routes>
          <Route path="/addfriends" element={<renderyourFriends/>}/>
          </Routes>
          <Routes>
            <Route path="/yourfriends" element={<renderaddFriends/>}/>
            </Routes> */}
            <Link style={navStyle} to="your-friends">
          < li  onClick={()=>navigateTo(PAGE_YOUR_FRIENDS)}>Your Friends({your_friends.length})</li>
          </Link>
          <Link style={navStyle} to="add-friends">
          <li onClick={()=>navigateTo(PAGE_ADD_FRIENDS)}>Add Friends</li>
          </Link>
          
          
          </ul>
          </nav>

        </header>
        <div className="header_input">
            <SearchIcon />
            <input placeholder='Find Friend' type="text"  onChange={(event) =>handleSearch(event)} />
          </div>

        {page===PAGE_ADD_FRIENDS && renderaddFriends()}
        {page===PAGE_YOUR_FRIENDS && renderyourFriends()}
        </div>
        // </Router>
  );
}

export default Friend;




// import React, { useState } from 'react';
// import './Friend.css';
// import {Link} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import SearchIcon from "@material-ui/icons/Search";
// import { Button, RootRef } from '@material-ui/core';
// import { ADD_FRIENDS, YOUR_FRIENDS } from './FriendsList';
// import {AddFriends } from './AddFriends';
// import { RemoveFriends } from './YourFriends';
// import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';



// function Friend() {

//   const PAGE_ADD_FRIENDS='add-friends';
//   const PAGE_YOUR_FRIENDS='your-friends';

//   const [your_friends,setYourFriend]=useState(YOUR_FRIENDS);
//   const [page,setPage]=useState(PAGE_ADD_FRIENDS);
//   const[add_friends,setAddFriends]=useState(ADD_FRIENDS);

//   const handleSearch = (event) => {
//     let value = event.target.value.toLowerCase();
//     let result = [];
//     let result2= [];
//     console.log(value);
//     result = add_friends.filter((data) => {
//     return data.name.search(value) != -1;
//     });
//     result2 = your_friends.filter((data) => {
//       return data.name.search(value) != -1;
//     })
//     console.log(result)
//     setAddFriends(result);
//     setYourFriend(result2);
//     }

//     const addToFriends=(add_friend)=>{
//         setAddFriends(add_friends.filter((p)=> (p!==add_friend)))
//         setYourFriend([...your_friends,{...add_friend}]);
//         alert(add_friend.name+ " is added as your friend");
      
//       }; 
    
//   const removeFromFriends=(friendToRemove)=>{
//     setYourFriend(
//         your_friends.filter((add_friend)=> add_friend!==friendToRemove)
//     );
//     alert(friendToRemove.name+" is removed from your friend's list");
//   };


//   const navigateTo=(nextPage)=>{
//     setPage(nextPage);
//   };
  

//   const navStyle=
//         {
//             color:'white'
//         };
//     return (
//       <div class="friends">
//          <div className="header_input">
//             <SearchIcon />
//             <input placeholder='Search meetBook' type="text" onChange={(event) =>handleSearch(event)}/>
//       </div>
//                  <Switch>
//            <nav>
//            <ul className="nav-links">
           
//          <Route path="/addfriends" render={()=>(<div><AddFriends add_friends={add_friends} addToFriends={addToFriends} handleSearch={handleSearch}/></div>)} />
//              <Route path="/yourfriends" component={RemoveFriends} />
//              <Link style={navStyle} to="your-friends">
//            < li  onClick={()=>navigateTo(PAGE_YOUR_FRIENDS)}>Your Friends({your_friends.length})</li>
//            </Link>
//            <Link style={navStyle} to="add-friends">
//            <li onClick={()=>navigateTo(PAGE_ADD_FRIENDS)}>Add Friends</li>
//            </Link>
          
          
//           </ul>
//           </nav>
//            </Switch>
//            {page ===PAGE_ADD_FRIENDS && <AddFriends add_friends={add_friends} addToFriends={addToFriends} handleSearch={handleSearch}/>}
//        {page ===PAGE_YOUR_FRIENDS && 
//       <RemoveFriends your_friends={your_friends} removeFromFriends={removeFromFriends} handleSearch={handleSearch}/>}
     
//       </div>
        
//   );
// }

// export default Friend;
