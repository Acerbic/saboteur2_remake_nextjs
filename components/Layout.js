/**
 * Renders main layout for the pages, populates <head> tag
 */

import 'reset-css'
import '../style.css'

import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Disclaimer from './Disclaimer'

class Layout extends React.Component {

    componentDidMount() {
        document.getElementsByTagName('HTML')[0].classList.remove('noJs');
        document.getElementsByTagName('HTML')[0].classList.add('hasJs');
    }

    render() {
        const article_attrs = {
            className: this.props.className,
            id: this.props.id
        };
        
        return (
            <>
                <Head>
                    <title>{this.props.title}</title>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="description" content={ this.props.meta_descr } />
                    <link rel="shortcut icon" type="image/x-icon" href="static/images/favicon.png" />
                    <link href="https://fonts.googleapis.com/css?family=Oswald:700&amp;subset=cyrillic" rel="stylesheet" /> 
                </Head>
                <Header page={this.props.page_menu_item}/>
                <article {...article_attrs}>
                    {this.props.children}
                </article>
                <Footer>{this.props.footer_note}</Footer>
                <Disclaimer />
            </>
        )
    }
}

export default Layout