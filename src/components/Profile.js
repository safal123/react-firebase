import React, { useContext } from "react";
import { auth } from "../firebase";
import { UserContext } from "../providers/UserProvider";
import { useHistory } from 'react-router-dom';
import Spinner from "./Spinner";

const ProfilePage = () => {
    const user = useContext(UserContext);
    const history = useHistory();

    const signOut = () => {
        auth.signOut().then(() => {
            window.localStorage.removeItem('auth');
            history.push('/login')
        })
    }
    if (!user) {
        return <Spinner color="pink" />;
    }

    return (
        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
            <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
                <div
                    style={{
                        background:
                            `url(${user.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
                        height: "200px",
                        width: "200px"
                    }}
                    className="border border-blue-300"
                ></div>
                <div className="md:pl-4">
                    <h2 className={`text-2xl font-semibold`}>{user.displayName || ''}</h2>
                    <h3 className="italic">{user.email || ''}</h3>
                </div>
            </div>
            <button onClick={() => signOut()} className="w-full py-3 bg-red-600 mt-4 text-white">Sign out</button>
        </div >
    )
};
export default ProfilePage;