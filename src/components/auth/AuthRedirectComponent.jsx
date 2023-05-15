import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.auth.isAuth) return <Navigate to={"/login"} />
            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectComponent);

}