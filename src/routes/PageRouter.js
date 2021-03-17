import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import App from '../App';
import CompanyProfile from '../components/CompanyProfile';
import EditCompanyProfile from '../components/EditCompanyProfile';
import Login from '../components/Login';
import Navbar from '../components/Navbar';
import PasswordReset from '../components/PasswordReset';
import ProfilePage from '../components/Profile';
import Signup from '../components/Signup';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const PageRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>
                <PublicRoute exact component={Signup} path="/signup" />
                <PublicRoute exact component={Login} path="/login" />
                <PrivateRoute exact component={ProfilePage} path="/profile" />
                <Route exact path="/password-reset">
                    <PasswordReset />
                </Route>
                <PublicRoute exact component={CompanyProfile} path="/company-profile/:id" />
                <PrivateRoute exact component={EditCompanyProfile} path="/company-profile/:id/edit" />
            </Switch>
        </Router>
    )
}

export default PageRouter
