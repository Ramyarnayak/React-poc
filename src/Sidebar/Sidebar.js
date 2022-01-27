import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import { useStateValue } from '../state/Provider'
import {  useNavigate } from "react-router-dom";
import LogOut  from '../auth/Logout/Logout';
import {
    LocalHospital,
    People,
    Chat,
    NewReleasesOutlined,
} from '@material-ui/icons'

function Sidebar() {
  const history = useNavigate();
  const [{user}, dispatch] = useStateValue();
    return (
      <div className="sidebar">
         
         <span onClick={() => { history('/profile')}}>
            <SidebarRow src={user.photoURL} title={user.displayName} />
        </span>
        
        <span   onClick={() => { history('/covid') }}>
             <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
        </span>
        
        <span   onClick={() => { history('/friends') }}>
            <SidebarRow Icon={People} title='Friends' />
        </span>

        <span   onClick={() => { history('/') }}>
            <SidebarRow Icon={Chat} title='Feed' />
       </span>

        <span  onClick={() => { history('/news') }}>
            <SidebarRow Icon={NewReleasesOutlined} title='News' />
        </span>
        
        <LogOut/>
       </div>
  


    );
}

export default Sidebar
