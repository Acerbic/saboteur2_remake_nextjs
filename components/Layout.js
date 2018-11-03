/**
 * Renders main layout for the pages, populates <head> tag
 */

import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Disclaimer from './Disclaimer'
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
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                <meta name="description" content="{{ meta_descr }}" />
                <link rel="shortcut icon" type="image/x-icon" href="static/images/favicon.png" />
                <link href="https://fonts.googleapis.com/css?family=Oswald:700&amp;subset=cyrillic" rel="stylesheet" /> 
            </Head>
            <Header page={props.page_menu_item} />
            <article {...article_attrs}>
                {props.children}
            </article>
            <Footer>{props.footer_note}</Footer>
            <Disclaimer />
        </>
    )
}

export default Layout