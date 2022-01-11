
import React from "react";
import GoogleLogin from "react-google-login";
import { GoogleLogout } from "react-google-login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Friend from './Pages/Friend'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import './App.css'
import Feed from './Feed/Feed';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import { Button } from '@material-ui/core';
import CovidPage from "./Pages/CovidPage";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false
    };
  }
  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
  };

  logout = () => {
    this.setState({isUserLoggedIn: false})
  };

  render() {
    return (
      <div className="App">
        {!this.state.isUserLoggedIn && (
          
          <GoogleLogin className="login"
            clientId="600945460752-k3bi9hqvfu3t4no6iufl1rlpig5k1r3p.apps.googleusercontent.com" //TO BE CREATED
          
           
            render={renderProps => (
            <Button     onClick={renderProps.onClick}
            disabled={renderProps.disabled} variant="contained">Login with Google</Button>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        )}
        {this.state.isUserLoggedIn && (
          <div className="userDetails-wrapper">
            <div className="details-wrapper">
           
    <Router>
      <Header name={this.state.userDetails.givenName} last={this.state.userDetails.familyName} imageURL={this.state.userDetails.imageUrl}/>
           <div className="appBody">
              <Sidebar name={this.state.userDetails.givenName} last={this.state.userDetails.familyName} imageURL={this.state.userDetails.imageUrl}
             logout = {this.logout} 
             />

              <Switch>
                 <Route path='/feed'
                 render={()=>(<div><Feed name={this.state.userDetails.givenName} last={this.state.userDetails.familyName} imageURL={this.state.userDetails.imageUrl}/></div>)}
                 />
          <Route path='/news' component={Home} />
           <Route path='/profile' render={()=>(<div><Profile name={this.state.userDetails.givenName} last={this.state.userDetails.familyName} imageURL={this.state.userDetails.imageUrl}/></div>)} />
           <Route path='/friends' component={Friend} />
           <Route path='/covid' component={CovidPage} />
          </Switch>
            </div> 
       
             
      
          </Router>   
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;