import Link from 'next/link'
import MenuLink from './MenuLink'
import { withRouter } from 'next/router'

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
            <nav>
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
            <hr />

            <style jsx>{`
                header img {
                    padding-bottom: 15px;
                }

                nav#topnav ul {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                }

                nav#topnav ul li {
                    padding: 0 1em;
                }
            `}</style>
        </header>
    );
}

export default withRouter(Header)