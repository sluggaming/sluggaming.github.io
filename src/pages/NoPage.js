import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-white">
                <div className="text-black text-center">
                    <h1 className="text-6xl font-bold mb-6">404</h1>
                    <p className="text-2xl mb-6">Oops! Page not found</p>
                    <p className="text-lg mb-12">The page you're looking for might have been moved or doesn't exist.</p>
                    <Link to="/" className="bg-[#00588Fd3] font-bold px-6 py-3 rounded-md shadow-lg hover:bg-[#00588F] text-white transition-colors duration-300 ease-in-out">
                        Go to Home
                    </Link>
                </div>
            </div>
        </>
    )
}
export default NoPage