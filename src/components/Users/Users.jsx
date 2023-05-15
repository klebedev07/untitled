import React from "react";
import styles from './users.module.css'
import userPhoto from '../../assets/images/66a67e36fe8227d15c8c310cc112b60e74af5d6f.webp'
import {NavLink} from "react-router-dom";
const Users = (props) => {


    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (<div>
        <div>
            {pages.map(p => <span onClick={(e) => {
                props.onPageChanged(p)
            }} className={props.currentPage === p && styles.selectedPage}>{p}</span>)}
        </div>
        {props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => props.unFollow(u.id)}>Unfollow</button>
                                : <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
            <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>

        </div>)}
    </div>)

}
export default Users