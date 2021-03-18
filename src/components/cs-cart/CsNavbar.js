import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const CsNavbar = ({ displayname }) => {
    const [topMenuShow, setTopMenuShow] = useState(false);
    return (
        <Fragment>
            <div className="h-14 w-14 bg-green-700 absolute shadow-xl z-40 flex items-center justify-center cursor-pointer">
                <div className="fixed">
                    <svg className="animate-spin h-8 w-8 font-bold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>
            {/* style={{ backgroundColor: "#0488CC" }} */}
            <div className="h-8 flex items-center justify-between px-14 text-white text-sm bg-gradient-to-r from-green-900 to-green-600">
                <div className="hover:opacity-50 hover:shadow-md h-8 cursor-pointer flex items-center px-2 text-white">
                    <svg className="transform rotate-45 mb-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span className="">
                        <Link to="/">
                            {displayname ?? 'Safal Pokharel'}
                        </Link>
                    </span>
                </div>
                <div className="hidden lg:block">
                    <div className="flex">
                        <ul className="flex items-center text-sm font-semibold text-white">
                            <li className="hover:text-white cursor-pointer mr-4"><a>Become a seller</a></li>
                            <li className="hover:text-white cursor-pointer mr-4"><a>Vendor</a></li>
                            <li className="hover:text-white cursor-pointer mr-4"><a>Our Blog</a></li>
                            <li className="hover:text-white cursor-pointer mr-4"><a>Gift Certificates</a></li>
                            <li className="hover:text-white cursor-pointer mr-4"><a>Best Seller</a></li>
                            <li className="hover:text-white cursor-pointer mr-4"><a>New Products</a></li>
                            <li className="hover:text-white cursor-pointer mr-4"><a>Sale</a></li>
                        </ul>
                        <div className="h-8 border-l-2 border-r-2 border-gray-100 flex items-center px-2 hover:opacity-50 cursor-pointer" style={{ color: "#8fe3f8" }}>
                            ($)
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className="h-8 flex items-center px-2 hover:opacity-50 cursor-pointer hover:text-white" style={{ color: "#8fe3f8" }}>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clip-rule="evenodd" />
                            </svg>
                        English
                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div>
                        <svg onClick={() => setTopMenuShow(!topMenuShow)} className={`h-6 w-6 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            {topMenuShow ? <div className="lg:hidden bg-white px-14 border-t border-gray-100 pb-4 bg-gradient-to-r from-green-900 to-green-600">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">Become a seller</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">Vendor</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">Our Blog</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">Gift Certificates</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">Best Seller</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">New Products</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 text-sm font-sm">Sale</a>
            </div> : ''}
            <div style={{ minHeight: "90px" }} className="hidden bg-red-400 lg:flex items-center justify-between px-14 text-white text-sm">
                <div className="flex items-center">
                    <div className="h-full cursor-pointer">
                        <Link to="/">
                            <img className="block mt-6 mb-4 -ml-2 h-14" src="https://demos.mv.cs-cart.com/58ae777e94ee9099/images/logos/8/logo.png" />
                        </Link>
                    </div>
                    <div className="flex ml-16">
                        <ul className="flex items-center text-sm">
                            <li className="hover:underline cursor-pointer border-r-2 border-gray-200">
                                <a className="mr-4">Promotion</a>
                            </li>
                            <li className="hover:underline cursor-pointer mr-4 border-r-2 border-gray-200">
                                <a className="ml-4 mr-4">Brand</a>
                            </li>
                            <li className="hover:underline cursor-pointer mr-4 border-r-2 border-gray-200">
                                <a className="ml-4 mr-4">Newest</a>
                            </li>
                            <li className="hover:underline cursor-pointer mr-4 border-r-2 border-gray-200">
                                <a className="ml-4 mr-4">Best Seller</a>
                            </li>
                            <li className="hover:underline cursor-pointer">
                                <a className="ml-4 mr-4">On Sale</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center h-14 border rounded">
                        <div className="hover:shadow-md hover:text-blue-400 cursor-pointer">
                            <svg className="h-14 w-16 border-r-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#737373">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </div>
                        <div className="hover:shadow-md hover:text-blue-400 cursor-pointer">
                            <svg className="h-14 w-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#737373">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col text-blue-400 ml-4">
                        <p className="text-xl text-white font-semibold">+1 917-722-7425</p>
                        <a className="text-white">Request Call</a>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CsNavbar
