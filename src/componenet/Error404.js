import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
            <Header />
            <section className='page-404'>
                <div className="container">
                    <div className="bg-404">
                        <h2 className='main-heading heading'>404</h2>
                    </div>
                </div>
                <h2 className='main-heading'>Oops! Look like you're lost</h2>
                <h6 className='text-center'>The page you are looking for not available!</h6>
                <div className='backtohome'>
                    <Link to={'/'}> <button className='btn homebtn'>Back To Home</button></Link>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Error404