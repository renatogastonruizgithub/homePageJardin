import Head from 'next/head'
import { Layout } from '../layouts/homePage/layout'
import Banner from '../sections/banner'
import { Contact } from '../sections/contact'
import { Our } from '../sections/our'
import { LayoutHome } from '../layouts/homePage/layout'
import MyHead from '../components/MyHead'


export default function Home() {
  return (


    <LayoutHome>
      <MyHead></MyHead>
      <Banner></Banner>
      <Our></Our>
      <Contact></Contact>
    </LayoutHome>

  )
}

/* Home.getLayout = function getLayout(page) {
  return (
    <LayoutHome>

      {page}

    </LayoutHome>
  )
}
 */