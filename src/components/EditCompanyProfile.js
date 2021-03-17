import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner';
// import Moment from 'react-moment';
import 'moment-timezone';

const CompanyProfile = () => {
    const [company, setCompany] = useState('');
    let { id } = useParams();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/companies/${id}`)
            .then((res) => {
                setCompany(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    if (!company) {
        return <Spinner color="red" />
    }

    return (
        <div className="w-3/4 mx-auto mt-2 mb-4 shadow-md">
            <div className="flex flex-col ">
                <div className="bg-white shadow overflow-hidden">
                    <div className="px-4 py-5 sm:px-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg leading-6 font-medium text-gray-900">
                                Company Information
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-blue-500">
                                <a href={company.web}>{company.web}</a>
                            </p>
                        </div>
                        <Link to={`/company-profile/${company.edit}/edit`} className="text-green-500">Update Company Info</Link>
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Company Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" value={company.name} className="border-2 rounded border-gray-200 h-12 p-4 w-full" />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Description
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <textarea className="w-full border-2 rounded border-gray-200 h-40 p-4">
                                        {company.description}
                                    </textarea>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" value={company.email} className="border-2 rounded border-gray-200 h-12 p-4 w-full" />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" value={company.address} className="border-2 rounded border-gray-200 h-12 p-4 w-full" />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Company Mobile
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <pre className="text-green-800 leading-loose text-left">
                                        <input type="text" value={company.mobile} className="border-2 rounded border-gray-200 h-12 p-4 w-full" />
                                    </pre>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Company Web
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input type="text" value={company.web} className="border-2 rounded border-gray-200 h-12 p-4 w-full" />
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Owner
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <input disabled type="text" value={company.user.name} className="border-2 rounded border-gray-200 h-12 p-4 w-full" />
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">

                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <button type="submit" className="bg-gray-600 text-white border-2 rounded border-gray-200 h-12 p-4 w-full">Update</button>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CompanyProfile
