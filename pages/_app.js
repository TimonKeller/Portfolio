import { Layout } from '../components'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';
import Script from 'next/script';


function MyApp ({ Component, pageProps }) {
     <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id='G-NTWFLX19YN'`} />
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-NTWFLX19YN', {
                    page_path: window.location.pathname,
                    });
                `}
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}
export default MyApp
