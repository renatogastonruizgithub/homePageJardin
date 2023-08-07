import React from 'react'

import Navbar from '../../sections/navbar'
import Footer from '../../sections/Footer'


export const LayoutHome = ({ children }) => {
    return (
        <>

            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>{/* 
            <footer> </footer> */}

            < Footer />




        </>

    )

}

