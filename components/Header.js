/**
 * Renders header part of the layout - logo + main menu
 */

import Link from 'next/link'
import { withRouter } from 'next/router'
import MenuBar from './MenuBar'
import MenuBurger from './MenuBurger';

const Header = ({ page, router }) => {
    
    let active_path = page ? '/'+page : router.pathname;
    if (active_path == '/index') active_path = '/';

    return (
        <header>
            <div id="header-logo">
                <Link href="/">
                    <a>
                        <img 
                            src="static/images/banner.png" alt="Saboteur 2 in custom font" width="640" height="125" 
                            srcSet="static/images/320x_banner.png 320w, static/images/480x_banner.png 480w, static/images/banner.png 640w"
                            sizes="(max-width: 320px) 320px, (max-width: 480px) 464px, 600px"
                        /> 
                    </a>
                </Link>
            </div>
            <nav id="screen-nav">
                <MenuBar active_path={ active_path }/>
            </nav>
            <div id="burger-nav-sizing">
                <div id="burger-nav">
                    <MenuBurger active_path={ active_path }/>
                </div>
            </div>
            <hr />
            <style jsx global>{`
                header {
                    overflow: hidden;
                    position: relative;
                }
                #burger-nav {
                    margin-top: 4.9%;
                    width: 10%;
                    float: right;
                    position: relative;
                    padding-bottom: 8.7%;
                    margin-right: 1%;
                }

                #header-logo {
                    padding-bottom: 0.833em;
                    position: relative;
                    left: 50%;
                }
                #header-logo a {
                    /* center the overflow, since the 100% is in reference to actual
                    width - i.e. after clamping by min-width and max-width */
                    margin-left: -100%;
                    height: inherit;
                    /*display: block;*/
                }

                #header-logo img {
                    /* this results in parent's width, but clamped between 400 and 640 */
                    width: 100%;
                    /* display:block; */
                    max-width: 640px;
                    min-width: 400px; /* overflow starts below this */
                }

                header hr {
                    /* clear in case of burger-menu */
                    clear: both;
                }

                /* Menu selector */
                #burger-nav-sizing { display: none; }
                @media (max-width: 800px) {
                    #screen-nav { display: none; }
                    #burger-nav-sizing { display: block; }
                    #header-logo {
                        float: left;
                        position: static;
                        width: 87%;
                        padding: 0;
                    }
                    #header-logo a {
                        margin: 0;
                    }
                    #header-logo img {
                        /* Unsetting scale limits to keep burger menu
                           button in size with image  */
                        min-width: unset;
                        max-width: unset;
                    }
                }

                @media (max-width: 800px) and (orientation: landscape) {
                    /* fix height */
                    #header-logo {
                        height: 20vh;
                    }
                    /* switch to scaling from height */
                    #header-logo img {
                        height: inherit;
                        width: auto;
                    }
                    /* this is a bit messy, especially positioning part */
                    #burger-nav-sizing {
                        width: 120vh;
                        position: absolute;
                        top: 0;
                        right: 0;
                    }
                }
            `}</style>
        </header>
    );
}

export default withRouter(Header)