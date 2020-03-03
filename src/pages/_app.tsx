import { Fragment } from 'react'
import { Normalize } from 'styled-normalize'
import Head from 'next/head'

import 'github-markdown-css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>We Code KC | Home</title>
      </Head>
      <Normalize />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
