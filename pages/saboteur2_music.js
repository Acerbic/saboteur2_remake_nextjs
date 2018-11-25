import React from 'react'
import Layout from "../components/Layout"
import MusicList from "../components/MusicList"
import MusicTrackSwitcher from "../components/MusicTrackSwitcher"

const meta_descr = "Здесь можно послушать всю музыку из игры Saboteur 2. Доступны все версии и релизы, начиная от оригинальной композиции и заканчивая современными обработками. ZX Spectrum, IBM PC, Commodore C64 и Amstrad CPC."
const title = "Saboteur 2 - вся музыка и обработки из игры, Rob Hubbard, Marcel Donne, Endika, ZX Spectrum, Amstard CPC, Commodore C64, IBM PC, послушать, скачать, звук, ремикс, ремейк, remix"
const footer_note = "Вся музыка Saboteur 2. Слушай и наслаждайся как оригинальными версиями так и ремейками."

class PageMusic extends React.Component {
    constructor(props) {
        super(props);
        this.state = { track: 'sab2_amstrad_cpc' };
    }

    componentDidMount() {
        // Event delegation (switch track from <A> click)
        document.getElementById("article-music").addEventListener('click', e => {
            if (e.target.tagName == "A" && e.target.dataset && e.target.dataset.track) {
                e.preventDefault();
                this.setState({ track: e.target.dataset.track });
            }
        })
    }

    render() {
        const originals = [];
        const remixes = [];

        for (const trackId in MusicList) {
            const o = MusicList[trackId];
            if (o.group == "originals") originals.push(o);
            if (o.group == "remixes") remixes.push(o);
        }

        return (
            <Layout {...{ footer_note, title, meta_descr }} id="article-music" className="mono-column">
                <h1>Музыка из Saboteur 2</h1>
                <section id="overview" className="mono-column">

                    <p>
                        Роб Хуббард (Rob Hubbard) является создателем оригинальной композиции в Saboteur 2.<br />
                        Изначально он написал ее на компьютере Commodore C64, а для других платформ она была немного переработана
                        исходя из музыкальных чипов, установленных на них.
                    </p>

                    <img src="static/images/rob_hubbard1.jpg" className="bordered" alt="Фото Роба Хуббарда" width="344" height="252" />

                    <p>
                        Ниже, вы можете послушать каждую версию для конкретной игровой платформы.<br />
                        Все это даст вам уникальную возможность сравнить, оценить качество звучания, наборы инструментов, и
                        полностью насладится знакомой мелодией в разных ее исполнениях. Также, ниже доступны для прослушивания
                        интересно выполненные обработки и ремиксы на тему Saboteur 2. Старая мелодия обретает новые очертания,
                        новый взляд на нее, новую жизнь. Слушаем и наслаждаемся.
                    </p>
                </section>

                <section id="track-selection">
                    {/* In the following links, target and href attributes are only used when Javascript is disabled in browser,
                        data-track is used for switching with React when JS is enabled.
                    */}
                    <h3>Оригинальная музыка из релизов</h3>
                    <ul className="flex-container">
                        {
                            originals.map(track => 
                                <li key={ track.audiofile } className={ this.state.track == track.audiofile ? "current" : null}>
                                    <a target="mus_subpage" className="track-switch" 
                                        href={`saboteur2_mus_subpage?track=${track.audiofile}`}
                                        data-track={ track.audiofile }
                                        >

                                        { track.linkText }
                                    </a>
                                </li>
                            )
                        }
                        {/* <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_zx48k_sp" data-track="sab2_zx48k_sp">Spectrum 48k</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_zx128k_ay" data-track="sab2_zx128k_ay">Spectrum 128k</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_amstrad_cpc" data-track="sab2_amstrad_cpc">Amstrad CPC</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_c64" data-track="sab2_c64">Commodore C64</a></li> */}
                    </ul>
                    <h3>Обработки и ремиксы</h3>
                    <ul className="flex-container">
                        {
                            remixes.map(track => 
                                <li key={ track.audiofile } className={ this.state.track == track.audiofile ? "current" : null}>
                                    <a target="mus_subpage" className="track-switch" 
                                        href={`saboteur2_mus_subpage?track=${track.audiofile}`}
                                        data-track={ track.audiofile }
                                        >

                                        { track.linkText }
                                    </a>
                                </li>
                            )
                        }
                        {/* <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_hubbard" data-track="sab2_hubbard">Rob Hubbard</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_marcel_donne" data-track="sab2_marcel_donne">Marcel Donne</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_marcel_donne_revisited" data-track="sab2_marcel_donne_revisited">Marcel Donne - Revisited</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_v2009" data-track="sab2_v2009">Saboteur 2 v2009</a></li>
                        <li><a target="mus_subpage" className="track-switch" href="saboteur2_mus_subpage?track=sab2_endika" data-track="sab2_endika">Endika Fernandez - techno-mix</a></li> */}
                    </ul>
                </section>

                <section id="track-content">
                    {/* This is a bit complicated way to have this page's functionality both with JS enabled and disabled. 
                        See MusicTrackSwitcher component file for detailed description */}
                    <MusicTrackSwitcher track={this.state.track} />
                    <noscript>
                        <iframe name="mus_subpage" src="saboteur2_mus_subpage?track=sab2_amstrad_cpc" frameborder="0"
                            title="Страница с плеером музыки (переключается между треками ссылками выше)"
                        ></iframe>
                    </noscript>
                </section>

                {/* Sigh... another shortcoming of css-jsx. You can't combine 
                    non-local and local specifiers: if I don't put this into 
                    global I can't target html or do media-queries*/}
                <style jsx global>{`
                    iframe {
                        width: 100%;
                        height: 550px;
                    }
                    ul.flex-container {
                        justify-content: center;
                        margin-top: 0.5em;
                        margin-bottom: 2em;
                    }
                    ul.flex-container li {
                        min-width: 8em;
                        padding: 0 1em;
                        margin-bottom: unset;
                        margin-top: 0.4em;
                    }
                    a.track-switch {
                        cursor: pointer;
                        font-size: 1.2em;
                        color: darkorange;
                    }
                    html.hasJs article#article-music ul.flex-container li.current a {
                        text-decoration: underline;
                        color: #FF4500;
                    }
                    /* hide switcher on this page when Js disabled */
                    article#article-music .music-track-switcher {
                        display: none;
                    }
                    html.hasJs article#article-music .music-track-switcher {
                        display: unset;
                    }

                    @media (orientation: landscape) and (max-height: 415px) {
                        html footer {
                            display: none;
                        }
    
                        /* one column on the side when js enabled  */
                        html.hasJs section#track-selection {
                            float: left;
                            clear: left;
                            width: 40%;
                        }
                        html.hasJs h3 {
                            margin: 0;
                        }
                        html.hasJs ul.flex-container {
                            margin-bottom: 1em;
                        }
                        html.hasJs article#article-music::after {
                            content: "";
                            display: table;
                            clear: both;
                        }

                        /* landscape and js disabled */
                        html.noJs section#track-selection {
                            display: flex;
                            flex-wrap: wrap;
                        }
                        html.noJs h3 {
                            width: 20%;
                            margin: 0;
                            align-self: center;
                        }
                        html.noJs ul.flex-container {
                            width: 80%;
                            margin-bottom: 0.5em;
                            justify-content: space-between;
                            font-size: 0.9em;
                        }
                        html.noJs ul.flex-container li {
                            padding: 0 0.4em;
                            min-width: unset;
                            text-align: center;
                            flex-grow: 1;
                        }
                        html.noJs article#article-music iframe {
                            max-height: 70vh;
                        }
                    }

                    @media (orientation: portrait) and (max-height: 824px) {
                        html footer {
                            display: none;
                        }

                        html.noJs article#article-music iframe {
                            max-height: 65vh;
                        }
                        html.noJs section#track-selection {
                            display: flex;
                            flex-wrap: wrap;
                        }
                        html.noJs h3 {
                            height: 2em;
                            margin: 0;
                            align-self: center;
                            margin-bottom: 1em;
                        }
                        html.noJs ul.flex-container {
                            margin-bottom: 0.5em;
                            justify-content: space-between;
                            font-size: 0.9em;
                        }
                        html.noJs ul.flex-container li {
                            padding: 0 0.4em;
                            min-width: unset;
                            text-align: center;
                            flex-grow: 1;
                            width: 100%
                        }
                        html.noJs h3:first-of-type { order: 1; width: 40%; }
                        html.noJs h3:last-of-type { order: 2; width: 60%; }
                        html.noJs ul.flex-container:first-of-type { order: 3; width: 40%; }
                        html.noJs ul.flex-container:last-of-type { order: 4; width: 60%; }
                    }

                `}</style>
            </Layout>
        )
    }
}

export default PageMusic;