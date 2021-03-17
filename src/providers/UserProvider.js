import React, { Component, createContext } from 'react';
import { auth } from '../firebase.js';

export const UserContext = createContext({ user: null });

class UserProvider extends Component {
    state = {
        user: null
    }

    componentDidMount = () => {
        auth.onAuthStateChanged(userAuth => {
            this.setState({ user: userAuth });
            if (this.state.user !== null) {
                localStorage.setItem('auth', true);
            } else {
                localStorage.removeItem('auth');
            }

        });
    }

    render() {
        return (
            <UserContext.Provider value={this.state.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;