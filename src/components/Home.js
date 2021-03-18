import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyCard from './CompanyCard';
import Spinner from './Spinner';

const Home = () => {
    const [companies, setCompanies] = useState();

    useEffect(() => {
        axios.get('http://localhost:8000/api/companies')
            .then((res) => {
                setCompanies(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    if (!companies) {
        return (
            <Spinner color={"green"} />
        );
    }
    return (
        <div className="my-12 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
                {companies && companies.map(company => (
                    <CompanyCard company={company} key={company.id} />
                ))}
            </div>
        </div>
    )
}

export default Home
