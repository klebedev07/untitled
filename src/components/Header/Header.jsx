import React from "react"
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={style.header}>
        <img
            src="https://w7.pngwing.com/pngs/452/127/png-transparent-makry-gialos-computer-icons-beach-binary-tree-beach-leaf-logo.png"/>
        <div className={style.loginBlock}>

            {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

        </div>
    </header>
}

export default Header