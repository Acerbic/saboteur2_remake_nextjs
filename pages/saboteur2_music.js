import React from 'react'
import Layout from "../components/Layout"
import MusicTrackSwitcher from "../components/MusicTrackSwitcher";

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
                this.setState({ track: e.target.dataset.track });
            }
        })
    }

    render() {
        return (
            <Layout {...{ footer_note, title, meta_descr }} id="article-music" className="mono-column">
                <h1>Музыка из Saboteur 2</h1>
                <section className="mono-column">

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

                <h3>Оригинальная музыка из релизов</h3>
                <ul className="flex-container">
                    <li><a className="track-switch" data-track="sab2_zx48k_sp">Spectrum 48k</a></li>
                    <li><a className="track-switch" data-track="sab2_zx128k_ay">Spectrum 128k</a></li>
                    <li><a className="track-switch" data-track="sab2_amstrad_cpc">Amstrad CPC</a></li>
                    <li><a className="track-switch" data-track="sab2_c64">Commodore C64</a></li>
                </ul>
                <h3>Обработки и ремиксы</h3>
                <ul className="flex-container">
                    <li><a className="track-switch" data-track="sab2_hubbard">Rob Hubbard</a></li>
                    <li><a className="track-switch" data-track="sab2_marcel_donne">Marcel Donne</a></li>
                    <li><a className="track-switch" data-track="sab2_marcel_donne_revisited">Marcel Donne - Revisited</a></li>
                    <li><a className="track-switch" data-track="sab2_v2009">Saboteur 2 v2009</a></li>
                    <li><a className="track-switch" data-track="sab2_endika">Endika Fernandez - techno-mix</a></li>
                </ul>

                <MusicTrackSwitcher track={this.state.track}></MusicTrackSwitcher>

                <style jsx>{`
                    article#article-music ul.flex-container {
                        justify-content: center;
                        margin-top: 0.5em;
                    }
                    article#article-music ul.flex-container li {
                        min-width: 8em;
                        padding: 0 1em;
                        margin-bottom: unset;
                    }
                    a.track-switch {
                        cursor: pointer;
                    }
                `}</style>
            </Layout>
        )
    }
}

export default PageMusic;