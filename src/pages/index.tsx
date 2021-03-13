import { NextPage } from 'next'
import Head from 'next/head'
import tw from 'twin.macro'
import { Main } from 'components/Main'
import { Footer } from 'components/Footer'

const container = tw`min-h-screen px-2 flex flex-col justify-center items-center`

const Home: NextPage = () => {
  return (
    <div css={container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />

      <Footer />
    </div>
  )
}

export default Home
