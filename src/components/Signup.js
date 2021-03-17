import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, generateUserDocument } from '../firebase';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const createUserWithEmailAndPasswordHandler = (event) => {
        event.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            setError("Password do not match");
            setLoading(false);
            return;
        }
        auth.createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response);
                generateUserDocument(response.user, { displayName: name });
                setEmail("");
                setPassword("");
                setName("");
                setConfirmPassword("");
                setLoading(false);
                history.push('/profile');
            }).catch(error => {
                setError(error.message);
                setLoading(false);
            })
        console.log(email);

    };

    const hideMessage = () => {
        setError('');
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.currentTarget;

        if (name === 'name') {
            setName(value);
        }

        if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
        else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };
    return (
        <div className="bg-white shadow-lg flex flex-col lg:w-2/4 sm:w-3/4 mx-auto mt-8 border-2 border-blue-500 rounded-md">
            <div className="p-4">
                <h1 className="text-2xl p-4 bg-white w-full text-red-500 border-l-8 border-red-500 text-center shadow-md">Sign Up</h1>
                {error &&
                    <div class="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3  relative" role="alert">
                        <div className="flex justify-between">
                            <strong className="font-bold">{error}</strong>
                            <span className="top-0 bottom-0 right-0 ml-4" onClick={() => hideMessage()}>
                                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                            </span>
                        </div>
                    </div>
                }
            </div>
            <form onSubmit={createUserWithEmailAndPasswordHandler}>
                <div className="flex flex-col p-4">
                    <div className="px-4 py-1 border-2 flex flex-col">
                        <label className="text-lg text-gray-500">Display Name</label>
                        <input
                            className="mt-2 mb-4 p-4 border-2 rounded-md"
                            type="test"
                            name="name"
                            value={name}
                            onChange={(e) => onChangeHandler(e)}
                            placeholder="Email address" />
                    </div>
                </div>
                <div className="flex flex-col p-4">
                    <div className="px-4 py-1 border-2 flex flex-col">
                        <label className="text-lg text-gray-500">Email Address</label>
                        <input
                            className="mt-2 mb-4 p-4 border-2 rounded-md"
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => onChangeHandler(e)}
                            placeholder="Email address" />
                    </div>
                </div>
                <div className="flex flex-col px-4 mb-4">
                    <div className="px-4 border-2 flex flex-col">
                        <label className="text-lg text-gray-500">Password</label>
                        <input
                            className="mt-2 mb-4 p-4 border-2 rounded-md focus-none"
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => onChangeHandler(e)}
                            placeholder="Password" />
                    </div>
                </div>
                <div className="flex flex-col px-4 mb-4">
                    <div className="px-4 border-2 flex flex-col">
                        <label className="text-lg text-gray-500">Confirm Password</label>
                        <input
                            className="mt-2 mb-4 p-4 border-2 rounded-md focus-none"
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => onChangeHandler(e)}
                            placeholder="Confirm Password" />
                    </div>
                </div>
                <div className="flex flex-row py-1 px-4 mb-4 justify-between">
                    <button
                        type="submit"
                        disabled={loading}
                        className="py-2 px-4 bg-gray-700 text-gray-100 rounded disabled:opacity-50">
                        {loading ? 'Please wait..' : 'Sign Up'}
                    </button>
                    <Link to="/login" className="py-2 px-4 bg-gray-700 text-gray-100 rounded">Login</Link>
                </div>
            </form>
            <div className="p-4">
                <p className="text-center my-3 text-gray-400">or</p>
                <button
                    className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">
                    Sign in with Google
                </button>
                <p className="text-center my-3">
                    Already have an account?{" "}
                    <Link to="signUp" className="text-blue-500 hover:text-blue-600">
                        Log In
                </Link>{" "}
                    <br />{" "}
                    <Link to="passwordReset" className="text-blue-500 hover:text-blue-600">
                        Forgot Password?
                </Link>
                </p>
            </div>
            {/*  */}
        </div>
    )
}

export default Signup
