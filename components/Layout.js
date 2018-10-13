import Header from './Header'
import Footer from './Footer'
import Head from 'next/head';


const Layout = (props) => (
    <div>
        <Head>
            <title>{props.title}</title>
        </Head>
        <Header />
        {props.children}
        <Footer>{props.footer}</Footer>
    </div>
)

export default Layout