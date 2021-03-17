import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from "../providers/UserProvider";

function PrivateRoute({ component: Component, ...rest }) {
    const user = useContext(UserContext);
    return (
        <Route {...rest} render={props => (
            user || localStorage.getItem('auth') ?
                <Redirect to="/profile" />
                : <Component {...props} />
        )} />
    )
}

export default PrivateRoute
