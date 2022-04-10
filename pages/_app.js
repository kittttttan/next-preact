import Layout from '../components/layout'
import '../styles/vendor/destyle.min.css'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
