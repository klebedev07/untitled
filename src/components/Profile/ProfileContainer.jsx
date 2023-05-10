import React from "react";
import "./Profile.css"
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUSerInfo} from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";



class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId =2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(resp => {
            this.props.setUSerInfo(resp.data)
        })
    }

    render() {
        return <div>
            <Profile {...this.props} userInfo={this.props.userInfo}/>
        </div>
    }
}

let mapStateToProps = (state) => ({
    userInfo: state.profilePage.userInfo

})

function withRouter(Children){
    return(props)=>{
        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}


export default connect(mapStateToProps, {setUSerInfo})(withRouter(ProfileContainer));