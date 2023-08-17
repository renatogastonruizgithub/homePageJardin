
import React from 'react'
import { Contact } from '../../sections/contact'
import Footer from '../../sections/Footer'
import Navbar from '../../sections/navbar'
import Head from 'next/head'
import MyHead from '../../components/MyHead'


export const LayuotSecondary = ({ children }) => {
    return (
        <>
            <MyHead />
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
