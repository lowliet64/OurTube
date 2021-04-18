import Head from "next/head";
import Header from './components/Header'
import './global.css'
function MyApp({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <link rel="shortcut icon" href="/favicon-logo.png" />
            </Head>
            <div><Component {...pageProps} /></div>
        </div>

    )
}

export default MyApp