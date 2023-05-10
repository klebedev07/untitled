import React from "react";
import classes from "./NavBar.module.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/dialogs'>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/setting'>Setting</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users'>Users</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;