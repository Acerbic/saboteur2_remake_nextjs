import Link from 'next/link'

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

const Header = (props) => (
    <header>
        <Link href="/">
            <a>
                <img src="static/images/banner.png" alt="" />
            </a>
        </Link>
        
        <nav id="topnav">
            <ul>
                {
                    menu_items.map(item => (
                        <li>
                            <Link href={item.src}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
        <hr></hr>
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

            nav a {
                color: #FFB90F;
                font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                text-decoration: none;
            }

            nav a.current {
                color: #FF4500;
            }
        `}</style>
    </header>
)

export default Header

