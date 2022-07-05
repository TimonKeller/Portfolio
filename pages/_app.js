import { Layout } from '../components'
import '../styles/globals.css'
import {ThemeProvider} from 'next-themes';


function MyApp ({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}
export default MyApp
