import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';

const Navbar = () => {
    const user = useContext(UserContext);
    const history = useHistory();
    const [openAccountLink, setOpenAccountLink] = useState(false);

    const signOut = () => {
        auth.signOut().then(() => {
            window.localStorage.removeItem('auth');
            history.push('/login')
        })
    }

    const authLinks = () => {
        return (
            <ul className="flex items-center px-6 text-gray-300 flex-col">
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
        <div className="bg-white border-t border-b border-gray-100 flex items-center sticky top-0">
            <div className="flex items-center justify-between px-14 min:h-12 w-1/4">
                <div className="hover:bg-gray-200 bg-gray-50 text-gray-100 flex items-center py-1 w-72 cursor-pointer justify-between">
                    <svg className="h-10 w-10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                    <span className="text-xl font-bold text-black">Categories</span>
                    <svg className="h-6 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>

                    {/* <div>
                        {user ? authLinks() : guestLinks()}
                    </div> */}
                </div>
            </div>
            <div className="w-2/4 ml-4">
                <input className="h-12 w-full px-6 border-2 focus:outline-none" type="text" placeholder="Search..." />
            </div>
            <div className="px-2 mx-2 hover:bg-gray-200 text-gray-100 flex items-center py-1 w-72 cursor-pointer items-center justify-center" onClick={() => setOpenAccountLink(!openAccountLink)} onClickAway={() => setOpenAccountLink(false)}>
                <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xl font-bold text-black">Account</span>
                <svg className="h-6 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                {openAccountLink == true ? <div className="absolute bg-gray-100 mt-28 mt-2 z-50 shadow-sm" style={{ width: "230px" }}>
                    <div className="h-auto hover:bg-gray-300">
                        {authLinks()}
                        {/* <Link to="/profile" className="text-gray-400 w-full">Profile</Link> */}
                    </div>
                </div> : ''}
            </div>
            <div className="px-2 mx-2 hover:bg-gray-200 text-gray-100 flex items-center py-1 w-72 cursor-pointer flex items-center justify-center">
                <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#11b9e4">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                <span className="text-xl font-bold text-black">Cart</span>
                <svg className="h-6 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    )
}

export default Navbar
