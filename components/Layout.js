import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import 'reset-css'
import '../style.css'

const Layout = (props) => (
    <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <Header />
        <article className={props.className}>
            {props.children}
        </article>
        <Footer>{props.footer}</Footer>
    </>
)

export default Layout