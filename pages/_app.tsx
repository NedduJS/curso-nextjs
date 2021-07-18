// import App from 'next/app'

import Layout from '@components/Layout'

function MyApp({ Component, pageProps }) {
  // Providers - Context/Providers, Theme, data
  // Layout
  // props adicionales
  return <Layout><Component {...pageProps} /></Layout>
}

export default MyApp