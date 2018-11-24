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
            <div id="burger-nav">
                <MenuBurger active_path={ active_path }/>
            </div>
            <hr />
            {/* have to put styles into jsx global (or into separate css file, 
                since it is using @media queries) */}
            <style jsx global>{`
                header {
                    overflow: hidden;
                    position: relative;
                }
                #burger-nav {
                    /* portion of the total width*/
                    width: 10%;

                    /* carving space to align size of button
                       to size of logo text */
                    margin-top: 4.8%;
                    margin-bottom: 3.8%;
                    margin-right: 1%;

                    /* anchoring the .bm-burger-button element */
                    position: relative;
                }
                #header-logo {
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

                /* Menu type selector (toggles between bar menu and burger menu) */
                #burger-nav-sizing { display: none; }

                /* show burger menu when js enabled and the screen is narrow */
                @media (max-width: 900px) {
                    html.hasJs #screen-nav { display: none; }
                    html.hasJs #burger-nav-sizing { display: block; }
                    html.hasJs header {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                    }
                    html.hasJs header hr {
                        width: 100%;
                    }
                    html.hasJs #header-logo {
                        position: static;
                        width: 87%;
                        padding: 0;
                    }
                    html.hasJs #header-logo a {
                        margin: 0;
                    }
                    html.hasJs #header-logo img {
                        /* Unsetting scale limits to keep burger menu
                           button in size with image  */
                        min-width: unset;
                        max-width: unset;
                    }
                }

                /* scale down logo+burger button when in landscape orientation */
                @media (max-width: 900px) and (max-height: 80vw) and (orientation: landscape) {
                    /* fix height */
                    html.hasJs #header-logo {
                        height: 20vh;
                    }
                    /* switch to scaling from height */
                    html.hasJs #header-logo img {
                        height: inherit;
                        width: auto;
                    }
                    html.hasJs #burger-nav {
                        /*w = 10% of would-be-width
                        wbw = img-width / 87 * 100
                        img-width = img-height/125*640
                        img-height = 20vh

                        iw = 640/125 * 20 vh
                        wbw = 100/87 * 640/125 * 20vh
                        w = 11.77vh

                        so, w_vh = w_percent * 1.1770114942528735632183908045977
                        */
                        width: 11.77vh;
                        margin-top: 5.6vh;
                        margin-bottom: 4.4vh;
                    }
                }
            `}</style>
        </header>
    );
}

export default withRouter(Header)