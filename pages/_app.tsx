import Document, { Html, Head, Main, NextScript } from 'next/document'
import './global.css'
function MyApp({ Component, pageProps }) {
    return (

        <div><Component {...pageProps} /></div>
    )
}

export default MyApp