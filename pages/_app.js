import Layout from '../comps/layout'
import '../styles/globals.css'
import {album_data} from '../public/images/album_data'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.getInitialProps = async (appContext) => {
  return { album_list : album_data, };
};