import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment';
import 'moment-timezone';

const CompanyCard = ({ company }) => {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
                <Link to={`/company-profile/${company.id}`}>
                    <img alt="Placeholder" className="block h-auto w-full" src="https://picsum.photos/600/400/?random" />
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline text-black" href="#/">
                            {company.name}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                        <Moment fromNow>
                            {company.created_at}
                        </Moment>
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline text-black" href="#/">
                        <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                        <p className="ml-2 text-sm">
                            {company.email}
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#/">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
        </div>

    )
}

export default CompanyCard
