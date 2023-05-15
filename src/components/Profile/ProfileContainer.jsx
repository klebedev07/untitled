import React from "react";
import "./Profile.css"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";



class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =2
        }
        this.props.getUserProfileThunk(userId)
    }

    render() {
        if(this.props.auth.isAuth === false) return <Navigate to={"/login"} />
        return <div>
            <Profile {...this.props} userInfo={this.props.userInfo}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.profilePage.userInfo,
    auth: state.auth

})

function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}


export default connect(mapStateToProps, {getUserProfileThunk})(withRouter(ProfileContainer));