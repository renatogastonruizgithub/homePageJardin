import React from 'react'

import Navbar from '../../sections/navbar'
import Footer from '../../sections/Footer'
import { Our } from '../../sections/our'


export const LayoutHome = ({ children }) => {
    return (
        <>
            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            < Footer />
        </>

    )

}

