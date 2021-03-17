import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner';
import Moment from 'react-moment';
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
        <div className="w-3/4 mx-auto mt-2 mb-4">
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
                        {localStorage.getItem('auth') ? <Link to={`/company-profile/${company.id}/edit`} className="text-green-500">Update Company Info</Link> : ''}
                    </div>
                    <div className="border-t border-gray-200">
                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Company Name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {company.name}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Description
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {company.description}
                                    <span>
                                        <a href="#/" className="text-blue-600">Read more..</a>
                                    </span>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {company.email}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {company.address}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Company Social Rank
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <pre className="text-green-800 leading-loose text-left">
                                        {company.rank_json}
                                    </pre>
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Joined Date
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <Moment fromNow>
                                        {company.created_at}
                                    </Moment>
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Membership Plan
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    <p>
                                        Free Trail, ( expires on 2 days.)
                                        <a href="#/" className="text-red-400 ml-2">
                                            Upgrade Your Plan
                                        </a>
                                    </p>

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
