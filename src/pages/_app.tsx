import { Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import Head from 'next/head'
import { Layout } from '../components'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>We Code KC | Home</title>
      </Head>
      <Normalize />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

export default MyApp
