/**
 * Renders header part of the layout - logo + main menu
 */

import Link from 'next/link'
import MenuLink from './MenuLink'
import { withRouter } from 'next/router'
import { bubble as Menu } from 'react-burger-menu'

/**
 * List main menu items - titles and urls
 */
const menu_items = [
    {
        "name": "Главная",
        "src": "/"
    },
    {
        "name": "Миссии",
        "src": "/saboteur2_miss"
    },
    {
        "name": "Враги",
        "src": "/saboteur2_vragi"
    },
    {
        "name": "Предметы",
        "src": "/saboteur2_predm"
    },
    {
        "name": "Панель",
        "src": "/saboteur2_panel"
    },
    {
        "name": "Оружие",
        "src": "/saboteur2_weapon"
    },
    {
        "name": "Карта",
        "src": "/saboteur2_map"
    },
    {
        "name": "Музыка",
        "src": "/saboteur2_music"
    },
    {
        "name": "Тактика",
        "src": "/saboteur2_tactic"
    },
    {
        "name": "Секреты",
        "src": "/saboteur2_secret"
    },
    {
        "name": "Факты",
        "src": "/saboteur2_facts"
    },
    {
        "name": "Фантазии",
        "src": "/saboteur2_fantasy"
    },
    {
        "name": "Играть",
        "src": "/saboteur2_play"
    },
    {
        "name": "Релизы",
        "src": "/saboteur2_release"
    },
    {
        "name": "Пресса",
        "src": "/saboteur2_press"
    },
    {
        "name": "История",
        "src": "/saboteur2_history"
    },
    {
        "name": "Контакты",
        "src": "/saboteur2_contacts"
    }
]

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
                <ul id="navigation">
                    {
                        menu_items.map(item => (
                            <li key={item.src}>
                                <MenuLink href={item.src} active={item.src === active_path}>
                                    {item.name}
                                </MenuLink>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <div id="burger-nav">
                <Menu right={ true } customCrossIcon={false} bodyClassName={"bm-open"}>
                    {
                        menu_items.map(item => (
                            <div className="menu-item" key={item.src}>
                                <MenuLink
                                    active={item.src === active_path}
                                    href={item.src}>

                                    {item.name}
                                </MenuLink>
                            </div>
                        ))
                    }
                </Menu>
            </div>
            <hr />
            <style jsx>{`
                header {
                    overflow: hidden;
                }
            `}</style>
            <style jsx global>{`
                #burger-nav {
                    margin-top: 5%;
                    width: 10%;
                    float: right;
                    position: relative;
                    padding-bottom: 8.6%;
                }
                .bm-burger-button {
                    position: absolute;
                    width: 95%;
                    margin-right: 5%;
                    height: 100%;
                }
                .bm-open .bm-burger-button {
                    visibility: hidden;
                }
                .bm-menu-wrap {
                    top: 0;
                    overflow: hidden;
                }
                .bm-burger-bars {
                    background: beige;
                }
                .bm-overlay {
                    left: 0; top: 0; bottom: 0; right: 0;
                }
                .bm-menu {
                    padding: 2em;
                    overflow: hidden;
                }
                .bm-morph-shape {
                    fill: rgba(54, 54, 54, 0.9);;
                }
                .bm-item-list {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                .bm-item:first-child {
                    width: 100%;
                    text-align: center;
                    font-size: 2em;
                }
                .bm-item:nth-child(2n+2) {
                    text-align: right;
                    padding-right: 0.5em;
                }
                .bm-item:nth-child(2n+3) {
                    text-align: left;
                    padding-left: 0.5em;
                }

                .bm-item {
                    font-size: 1.25em;
                    display: block;
                    width: 50%;
                    box-sizing: border-box;
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
                }

                #header-logo img {
                    /* this results in parent's width, but clamped between 400 and 640 */
                    width: 100%;
                    /* display:block; */
                    max-width: 640px;
                    min-width: 400px; /* overflow starts below this */
                }

                ul#navigation {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                ul#navigation li {
                    padding: 0 1em;
                }

                header hr {
                    /* clear in case of burger-menu */
                    clear: both; /* TODO: better clear */
                }

                /* Menu selector */
                #burger-nav { display: none; }
                @media (max-width: 1024px) {
                    #screen-nav { display: none; }
                    #burger-nav { display: block; }
                    #header-logo {
                        float: left;
                        position: static;
                        width: 87%;
                    }
                    #header-logo a {
                        margin: 0;
                    }
                    #header-logo img {
                        min-width: unset;
                        max-width: unset;
                    }
                }
            `}</style>
        </header>
    );
}

export default withRouter(Header)