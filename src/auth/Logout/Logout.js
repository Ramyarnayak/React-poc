import React from 'react';
import {
LinkOff
} from '@material-ui/icons'
import SidebarRow from '../../Sidebar/SidebarRow/SidebarRow';
import firebase from 'firebase';
import { useStateValue } from '../../state/Provider'
import { actionTypes } from '../../state/reducer'

function LogOut (){
    const [state, dispatch] = useStateValue();

    const signOut = () => {
        firebase.auth().signOut().then(function() {

            dispatch({
                type: actionTypes.LOGOUT,
                user: null
            });
            console.log("Logout")
          }).catch(function(error) {
            console.log("error")
          });
    }

    return (

        <span  onClick={signOut} >
             <SidebarRow Icon={LinkOff} title='Logout' />
        </span>

    )
}

export default LogOut;
