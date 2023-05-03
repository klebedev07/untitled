import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Users from "./components/Users/Users"
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/dialogs' element={<DialogsContainer />}/>
                    {/*<Route path='/profile' element={<Profile state={props.state} addPost={props.addPost}/>}/>*/}
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
