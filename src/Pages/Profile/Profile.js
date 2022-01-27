// import React,{ useEffect, useState ,   useLayoutEffect} from 'react';
// import cover from './../../assets/cover.jpg';
// import './Profile.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   Button,
//   Avatar,
//   CircularProgress,
//   Typography,
//   Divider,
//   TextField,
// } from "@material-ui/core";

// import CloseIcon from "@material-ui/icons/Close";
// import axios from "axios";
// import  SpacingGrid from './../views/aboutme'
// import Container from '@material-ui/core/Container'
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import indigo from '@material-ui/core/colors/indigo';
// import green from '@material-ui/core/colors/green';
// import Zoom from 'react-reveal/Zoom'
// import BackgroundImagePage from './../views/begins/begins'
// import Resume from './../views/resume'
// import {library} from '@fortawesome/fontawesome-svg-core';
// import {faTrash} from '@fortawesome/free-solid-svg-icons';

// import { useStateValue } from './../../state/Provider';
// import db from '../../firebase';
// import EditForm from './EditForm/EditForm';
// import AddInfo from './AddInfo/AddInfo';


// library.add(faTrash);
// const theme = createMuiTheme({
//   palette: {
//     primary: indigo,
//     secondary: green,
//   },
//   status: {
//     danger: 'orange',
//   },
// });
// function Profile() {


//   const [{user}, dispatch] = useStateValue();
// const [edit, setEdit] = useState(false);
//   const[picture,setPicture]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
    
//   const imageHandler = (e) => {
//       setPicture(URL.createObjectURL(e.target.files[0]));
//     };

//     const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
//   const [list, setList] = useState([]);
//   const [text, setText] = useState("");
//   const [Bio, setBio] = useState(null);
//   const[addInfo, setAddInfo] = useState(false)
//   useLayoutEffect(() => {
//     db.collection("bio").onSnapshot((snapshot) =>
//         setBio(
//           snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
//         )
//       );
//   Bio && Bio.map((bioData)=> {
    
//     if(user.displayName !== bioData.data.name){
    
//       setAddInfo(true);
//       setEdit(false);
//     } else{
//       setAddInfo(false);
//       setEdit(true);
//     }
//   })
  
// }, []);
//   const addItem = (e) => {
//       e.preventDefault();
//       const tempData=[...list];
//       tempData.push(text);
//       setList(tempData);
//       setText("");
//     }
//   const deleteItem = (key) => {
//     alert("Do you want to delete your post?")
//     let newData=[...list];
//     newData.splice(key,1);
//     setList(newData);
//   }

//   useEffect(()=> {
//     console.log(user)
//     const data=localStorage.getItem("picture");
//     const comment=localStorage.getItem("comments");
//     if(data || comment) {
//       setPicture(JSON.parse(data));
//       setList(JSON.parse(comment));
//     }
//   },[]);

//   const onEditSubmit = async (e) => {
//     e.preventDefault();
      
//       var name, education, contact, hobbies, dob, gender;
//       name = user.displayName
//       education= e.target.elements.education.value
//       contact= e.target.elements.contact.value
//       gender= e.target.elements.gender.value
//       hobbies= e.target.elements.hobbies.value;
//       dob= e.target.elements.dob.value;

// const body ={
// name: name,
// education: education,
// contact: contact,
// gender: gender,
// hobbies: hobbies,
// dob :dob
  

// };
//     db.collection('bio').add({  
//       name : user.displayName,
//       education: e.target.elements.education.value,
//       contact: e.target.elements.contact.value,
//       gender: e.target.elements.gender.value,
//       hobbies: e.target.elements.hobbies.value,
//       dob: e.target.elements.dob.value
      
   
//    });

  
//         setEdit(false);
        

//   };

  
//   useEffect(() => {
//     localStorage.setItem("picture",JSON.stringify(picture)) 
//     localStorage.setItem("comments",JSON.stringify(list))  
//   });




//   const [selectedImage, setSelectedImage] = useState(null);

//   return (
//     <div>


     
      

//     { !edit  && !addInfo ? (
//     <div className="App">
//       <div className="container">
//         <div className="cover">
//             <div className="avatar">
//                 <img src={cover} alt="coverpic"/>
//             </div>
//             {/* <div className="name">
//                 <h2>{props.name} {props.last}</h2>
//             </div> */}
//         </div>
//         <div className="photo">
//             <div className="avatar2">
//               { !selectedImage ? 
//                 (<img src={user.photoURL} alt="" id="img" className="img" />)
//                 :(
//                   <>
//                   <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
//                   <br />
//                   <button onClick={()=>setSelectedImage(null)}>Remove</button>
//                   </>
//                 )
//               }
             
              
              
//             </div>
//             <div className='="image-upload'>
//             <input
//         type="file"
//         name="myImage"
//         onChange={(event) => {
//           console.log(event.target.files[0]);
//           setSelectedImage(event.target.files[0]);
//         }}
//       /> 
//       </div>
//             {/* <div className="image-upload">
//               <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} /> */}
//                 {/* <label className="image-upload" htmlFor="input">Choose your photo</label> */}
//             {/* </div> */}
//         </div>
//       </div>
//       { addInfo ? (
//                       <Button
//                         onClick={() => setEdit(true)}
//                         variant="outlined"
//                         color="primary"
//                         className="edit-btn"
//                       >
//                         Edit Profile
//                       </Button>
//       ):(
//         <Button
//                         onClick={() => setAddInfo(true)}
//                         variant="outlined"
//                         color="primary"
//                         className="edit-btn"
//                       >
//                         Add Profile
//                       </Button>
//       )
                  

//       }
// {/* 
//       <div  >
//         <ButtonAppBar></ButtonAppBar>  
//       </div> */}
//       {/* <BackgroundImagePage></BackgroundImagePage> */}
//       { Bio? 
//   (Bio.map(( bioData) =>(
//    bioData.data.name == user.displayName ? (
    
        
//       <Zoom>
//         <Container>  <SpacingGrid user={user} bio={bioData.data} ></SpacingGrid> </Container>
//           <Container> <Resume  user={user} bio={bioData.data} ></Resume></Container>
//           {/* <h1>{bioData.data.dob}</h1> */}
//       </Zoom>
   
//  ): null
//  )
//  )) : null
// }
//     </div>
//     ):  
//     (addInfo  ? (
//   <AddInfo setAddInfo={setAddInfo} setEdit={setEdit} username={user.displayName}/>
//     ):  <EditForm setEdit={setEdit} setAddInfo={setAddInfo} username={user.displayName}/>)
    
//     }
// </div>
//   );
  
//   }


// export default Profile;



import React from 'react';

function Profile() {
  return (







    <div className="w-full h-full">
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <div className="w-full h-auto shadow bg-white rounded-md">
        <div className="max-w-6xl h-full mx-auto bg-white mt-2 p-2">
          <div
            className="h-96 max-h-96 w-full rounded-lg relative"
            style={{
              backgroundImage: `url('https://picsum.photos/720')`,
            }}
          >
            <div
              className="absolute  w-full flex items-center justify-center"
              style={{ bottom: '-15px' }}
            >
              <div className="w-44 h-44 rounded-full bg-gray-300 border-4 border-white">
                <img
                  className="w-full h-full rounded-full"
                  src="https://picsum.photos/200"
                  alt="dp"
                />
              </div>
              <div className="absolute" style={{ bottom: 30, right: 30 }}>
                <button className="focus:outline-none px-3 py-2 hover:bg-gray-50 font-semibold bg-white rounded-md">
                  <i className="fas fa-camera mr-2"></i>Edit Cover Photo
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-5xl h-full mx-auto">
            <div className="flex flex-col space-y-2 mt-3 items-center justify-center pb-3 border-b-2">
              <p className="text-4xl font-bold">Saiful Islam Shihab</p>
              <p className="text-sm text-gray-500">I am Software Engineer</p>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <div className="flex mb-2 items-center space-x-2">
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Posts
                </button>
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  About
                </button>
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Friends
                </button>
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Photos
                </button>
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Story Archrive
                </button>
                <button className="py-3 px-2 hover:bg-gray-100 rounded-md font-semibold focus:outline-none">
                  Videos
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 rounded-md bg-primary hover:bg-blue-600 text-white font-semibold focus:outline-none">
                  <i className="fas fa-plus-circle  mr-2"></i>Add to Story
                </button>
                <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                  <i className="fas fa-pen mr-2"></i>Edit Profile
                </button>
                <button className="px-3 py-1.5 rounded-md bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none">
                  <i className="fas fa-ellipsis-h"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* After bio content */}
      <div className="max-w-6xl h-full mx-auto mt-2">
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <div className="bg-white rounded-lg p-3 text-sm text-gray-600 shadow">
              <div className="mb-2 ">
                <p className="font-bold text-xl text-gray-800">Intro</p>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-briefcase"></i>
                  </span>
                  <p>
                    Full Stack Web Developer at{' '}
                    <span className="font-semibold">Fiverr</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-graduation-cap"></i>
                  </span>
                  <p>
                    Studiend B.Sc in SWE at{' '}
                    <span className="font-semibold">
                      Daffodil International University
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-home"></i>
                  </span>
                  <p>
                    Lives in <span className="font-semibold">Dhaka</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>
                  <p>
                    From{' '}
                    <span className="font-semibold">
                      Chandpur, Chittagong, Bangladesh
                    </span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fas fa-heart"></i>
                  </span>
                  <p>
                    <span className="font-semibold">Single</span>
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-facebook"></i>
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://facebook.com/saifulshihab'}
                  >
                    <p>saifulshihab</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-instagram"></i>
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://instagram.com/_shiha6'}
                  >
                    <p>_shiha6</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-twitter"></i>
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://twitter.com/ShihabSWE'}
                  >
                    <p>ShihabSWE</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-github"></i>
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://github.com/saifulshihab'}
                  >
                    <p>saifulshihab</p>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span>
                    <i className="fab fa-behance"></i>
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={'https://www.behance.net/saifulis1am'}
                  >
                    <p>saifulis1am</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3">
            {/* Create post */}
            {/* <CreatePostBox /> */}

            {/* post filter box */}

            <div className="bg-white rounded-md shadow p-2 mt-4 px-3">
              <div className="flex items-center justify-between pb-2 border-b">
                <div>
                  <p className="text-xl text-gray-700 font-bold">Posts</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                    <i className="fas fa-sliders-h mr-2"></i>Filters
                  </button>
                  <button className="px-3 py-1.5 bg-gray-200 hover:bg-gray-300 rounded-md font-semibold focus:outline-none">
                    <i className="fas fa-cog mr-2"></i>Manage Posts
                  </button>
                </div>
              </div>
              <div className="flex space-x-3 text-gray-500 mt-1">
                <button className="font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                  <i className="fas fa-bars mr-2"></i>List View
                </button>
                <button className="font-semibold flex-1 h-8 focus:outline-none focus:bg-gray-200 justify-center space-x-2 hover:bg-gray-100 rounded-md">
                  <i className="fas fa-th-large mr-2"></i>Grid View
                </button>
              </div>
            </div>

            {/* user posts */}

            {/* <PostContainer /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;





