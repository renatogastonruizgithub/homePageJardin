
import React from 'react'
import { Contact } from '../../sections/contact'
import Footer from '../../sections/Footer'
import Navbar from '../../sections/navbar'


export const LayuotSecondary = ({ children }) => {
    return (
        <>

            <nav>
                <Navbar />
            </nav>
            <main>

                {children}

            </main>
            <footer>

                <Contact></Contact>

                <Footer />




            </footer>

        </>
    )
}
