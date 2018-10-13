import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import 'reset-css'
import '../style.css'

const Layout = (props) => {
    const article_attrs = {
        className: props.className,
        id: props.id
    };
    
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header />
            <article {...article_attrs}>
                {props.children}
            </article>
            <Footer>{props.footer}</Footer>
        </>
    )
}

export default Layout