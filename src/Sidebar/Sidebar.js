import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// component
import SidebarRow from './SidebarRow/SidebarRow';

// context api
import { useStateValue } from '../state/Provider'
import { useHistory } from "react-router-dom";
// icons
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined, 
    NewReleasesOutlined
} from '@material-ui/icons'
import { GoogleLogout } from "react-google-login";
import { Button } from '@material-ui/core';
const Sidebar = ({name, last, imageURL, logout}) => {
    // const [{ user }, dispatch] = useStateValue();

    const history = useHistory();
    
    return (
        <div className="sidebar">
           
            <div   onClick={() => { history.push('/profile') }}>
            <SidebarRow  src={imageURL} title={name} ></SidebarRow>
            </div>
            {/* <div   onClick={() => { history.push('/covid') }}> */}
            <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
            {/* </div> */}
            <div   onClick={() => { history.push('/friends') }}>
            <SidebarRow Icon={People} title='Friends' />
          </div>
          <div   onClick={() => { history.push('/feed') }}>
            <SidebarRow Icon={Chat} title='Feed' />
      </div>

      <div   onClick={() => { history.push('/news') }}>
             
            <SidebarRow Icon={NewReleasesOutlined} title='News' />
       </div>


       <div >
       <GoogleLogout 
                render={renderProps => (
                  <Button variant="text"
                    onClick={renderProps.onClick}
                  >
                    Log Out
                  </Button>
                )}
                onLogoutSuccess={logout}
              /></div> 
            </div>
    )
}

export default Sidebar;
