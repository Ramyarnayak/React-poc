import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Login from './auth/Login/Login';
import { useStateValue } from './state/Provider'
import Feed from './Feed/Feed'
import Friend from './Pages/Friend/Friend'
import Home from './Pages/News/Home'
import Profile from './Pages/Profile/Profile'
import './App.css'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import CovidPage from "./Pages/CovidPage";
import Profile1 from './utility/Profile';
import Covid from './Pages/Covid/App';
import NewsPage from './Pages/NewsPage/components/NewsPage'
function App () {

  const [{ user }, dispatch] = useStateValue();

    return (
      <div className="App">
        { !user ? <Login />
        : (
          <>
            <Header />  
            <BrowserRouter>
              <div className="appBody">
              <Sidebar/>
              <Routes>
                 {/* <Route exact path='/' element={<Feed/>}/>
                 <Route path='/news' element={<NewsPage/>} />
                 <Route path='/profile' element={<Profile/>}/>
                 <Route path='/friends' element={<Friend/>} /> */}
                 <Route path='/covid' element={<Covid/>} />
                 </Routes>
                 <Routes>
                 <Route exact path='/' element={<Feed/>}/>
                 </Routes>
                 <Routes>
                 <Route path='/news' element={<NewsPage/>} />
                 </Routes>
                 <Routes>
                 <Route path='/profile' element={<Profile/>}/>
                 </Routes>
                 <Routes>
                 <Route path='/friends' element={<Friend/>} /> 
                 </Routes>
              </div> 
              </BrowserRouter> 
          </> 
       )
      }
    </div>
    );
  }


export default App;

