import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const user = useContext(UserContext);
    const history = useHistory();

    const signOut = () => {
        auth.signOut().then(() => {
            window.localStorage.removeItem('auth');
            history.push('/login')
        })
    }

    const authLinks = () => {
        return (
            <ul className="flex items-center px-6 text-gray-300">
                <li className="mr-3">
                    <Link onClick={() => signOut()} to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</Link>
                </li>
                <li>
                    <Link to="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profile</Link>
                </li>
            </ul>
        );
    }

    const guestLinks = () => {
        return (
            <ul className="flex items-center px-6 text-gray-300">
                <li className="mr-3">
                    <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                </li>
                <li className="mr-3">
                    <Link to="/signup" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Signup</Link>
                </li>
            </ul>
        );
    }
    return (
        <div className="bg-gray-800">
            <div className="flex items-center justify-between w-3/4 mx-auto text-gray-100 p-4">
                <div>
                    <h1>
                        <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Safal Online</Link>
                    </h1>
                </div>
                <div>
                    {user ? authLinks() : guestLinks()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
