import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '../components/templates/HomePage'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FastOffers - draft full real estate offers in a minute</title>
        <script src='./chat.js' async></script>
        <meta name="description" content="draft full real estate offers in a minute" />
        <link rel="icon" href="./favicon.ico" />
        <meta property="og:title" content="FastOffers - draft full real estate offers in a minute" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
        <meta property="og:image" content="./SocialShare.png" />
      </Head>

      <HomePage />
    </div>
  )
}

export default Home