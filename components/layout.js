import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Next.js + Preact Example</title>
            </Head>

            <div className="container">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
