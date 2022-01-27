import React,{ useEffect, useState ,   useLayoutEffect} from 'react';
import {
    Button,
    Avatar,
    CircularProgress,
    Typography,
    Divider,
    TextField,
  } from "@material-ui/core";
  import { useStateValue } from '../../../state/Provider';
  import db from '../../../firebase';
  import CloseIcon from "@material-ui/icons/Close"; 
function EditForm({setEdit, username, setAddInfo}) {

    const [{user}, dispatch] = useStateValue();
    const [Bio, setBio] = useState(null)
    const onEditSubmit = async (e) => {
        e.preventDefault();
          
          var name, education, contact, hobbies, dob, gender;
          name = user.displayName
          education= e.target.elements.education.value
          contact= e.target.elements.contact.value
          gender= e.target.elements.gender.value
          hobbies= e.target.elements.hobbies.value;
          dob= e.target.elements.dob.value;
          db.collection('bio').add({  
            name : user.displayName,
            education: e.target.elements.education.value,
            contact: e.target.elements.contact.value,
            gender: e.target.elements.gender.value,
            hobbies: e.target.elements.hobbies.value,
            dob: e.target.elements.dob.value
            
         
         });
      
         
              setEdit(false);
              
      
        };
        useLayoutEffect(() => {
            db.collection("bio").onSnapshot((snapshot) =>
                setBio(
                  snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
                )
              );
        }, []);

  return <div>
{Bio? 
  (Bio.map(( bioData) =>(
    bioData.data.name == username? (
<form onSubmit={onEditSubmit} className="edit-form">
      <CloseIcon
        onClick={() =>{
            setEdit(false);
        setAddInfo(false);
        }
    }
        className="notification-delete-btn close-edit"
      />

      
    
      <label htmlFor="education">Education</label>
      <TextField
        variant="outlined"
        name="education"
        defaultValue={bioData.data.education ? bioData.data.education : 'education'}
      />
      <br />
      <label htmlFor="contact">Contact Info</label>
      <TextField
        variant="outlined"
        name="contact"
        defaultValue={bioData.data.contact ? bioData.data.contact : 'contct no'}
      />
      <br />
      <label htmlFor="hobbies">Hobbies</label>
      <TextField
        variant="outlined"
        name="hobbies"
        defaultValue={bioData.data.hobbies ? bioData.data.hobbies : 'hobbies'}
      />
      <br />
      <label htmlFor="gender">Gender</label>
      <TextField
        variant="outlined"
        name="gender"
        defaultValue={bioData.data.gender ? bioData.data.gender : 'gender'}
      />
      <br />
      <label htmlFor="dob">Date of birtth</label>
      <TextField
        variant="outlined"
        name="dob"
        defaultValue={bioData.data.dob ? bioData.data.dob : 'dob'}
      />

      
      <Button
        className="edit-btn"
        variant="outlined"
        color="primary"
        type="submit"
      >
        Save
  </Button>
    </form>
    ): null )
    ))
    : null
    }
  </div>;
}

export default EditForm;
