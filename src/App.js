import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavBar from "./components/Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/dialogs' element={<DialogsContainer />}/>
                    <Route path='/profile/:userId?' element={<ProfileContainer />}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/setting' element={<Setting/>}/>
                    <Route path='/users' element={<UsersContainer />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
