import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/templates/HomePage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FastOffers - Draft Offers Faster</title>
        <script src='./chat.js' async></script>
        <meta name="description" content="Draft Offers Faster" />
        <link rel="icon" href="./favicon.ico" />
        <meta property="og:title" content="FastOffers - Draft Offers Faster" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fastoffers.ca/" />
        <meta property="og:image" content="./SocialShare.png" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home