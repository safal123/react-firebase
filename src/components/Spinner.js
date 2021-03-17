import React from 'react'

const Spinner = ({ color }) => {
    return (
        <div className="bg-gray-900">
            <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2">
                <div style={{ borderTopColor: 'transparent' }}
                    className={`border-solid animate-spin  rounded-full border-${color}-400 border-8 h-24 w-24`}>
                </div>
                Please wait...
            </div>
        </div>
    )
}

export default Spinner
