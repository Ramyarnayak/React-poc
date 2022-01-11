import React from 'react';
import './Header.css';
import NavItem from './NavItem/NavItem';
import DropdownMenu from './DropdownMenu/DropdownMenu';

// icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import   NewReleasesOutlined from '@material-ui/icons/NewReleasesOutlined';
import { Avatar } from '@material-ui/core';
import Chat from '@material-ui/icons/Chat';
import { useHistory } from "react-router-dom";

const Header = ({name, last, imageURL}) => {

    const history = useHistory();
    return (
        <div className="header">
            <div className="headerLeft">
                <h1>MeetBook</h1>
            </div>

            <div className="headerCenter">
                <div className="headerOption headerOptionActive">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="headerOption" onClick={() => { history.push('/feed') }}>
                    <FlagIcon fontSize="large" />
                </div>
                <div className="headerOption" onClick={() => { history.push('/feed') }}>
                    <Chat fontSize="large" />
                </div>
                <div className="headerOption" onClick={() => { history.push('/news') }}>
                    <NewReleasesOutlined fontSize="large" />
                </div>
                <div className="headerOption" onClick={() => { history.push('/friends') }}> 
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            
            <div className="headerRight">
                <div className="headerInfo">
                    <Avatar src={imageURL} />
                    <h4>{name} {last}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;
