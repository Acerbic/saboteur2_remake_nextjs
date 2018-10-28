import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Здесь можно послушать всю музыку из игры Saboteur 2. Доступны все версии и релизы, начиная от оригинальной композиции и заканчивая современными обработками. ZX Spectrum, IBM PC, Commodore C64 и Amstrad CPC." 
const title = "Saboteur 2 - вся музыка и обработки из игры, Rob Hubbard, Marcel Donne, Endika, ZX Spectrum, Amstard CPC, Commodore C64, IBM PC, послушать, скачать, звук, ремикс, ремейк, remix" 
const footer_note = "Вся музыка Saboteur 2. Слушай и наслаждайся как оригинальными версиями так и ремейками." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} id="article-music" className="mono-column">
        <h1>Музыка из Saboteur 2</h1>
        <section className="mono-column">

        <p>
            Роб Хуббард (Rob Hubbard) является создателем оригинальной композиции в Saboteur 2.<br/>
            Изначально он написал ее на компьютере Commodore C64, а для других платформ она была немного переработана 
            исходя из музыкальных чипов, установленных на них.
        </p>

        <img src="static/images/rob_hubbard1.jpg" className="bordered" alt="Фото Роба Хуббарда" width="344" height="252"/>

        <p>
            Ниже, вы можете послушать каждую версию для конкретной игровой платформы.<br/>
            Все это даст вам уникальную возможность сравнить, оценить качество звучания, наборы инструментов, и 
            полностью насладится знакомой мелодией в разных ее исполнениях. Также, ниже доступны для прослушивания 
            интересно выполненные обработки и ремиксы на тему Saboteur 2. Старая мелодия обретает новые очертания, 
            новый взляд на нее, новую жизнь. Слушаем и наслаждаемся.
        </p>
        </section>

        <h3>Оригинальная музыка из релизов</h3>
        <ul className="flex-container">
            <li><Link href="saboteur2_mus_zx48k_sp"><a target="mus_subpage">Spectrum 48k</a></Link></li>
            <li><Link href="saboteur2_mus_zx128k_ay"><a target="mus_subpage">Spectrum 128k</a></Link></li>
            <li><Link href="saboteur2_mus_amstrad_cpc"><a target="mus_subpage">Amstrad CPC</a></Link></li>
            <li><Link href="saboteur2_mus_c64"><a target="mus_subpage">Commodore C64</a></Link></li>
        </ul>
        <h3>Обработки и ремиксы</h3>
        <ul className="flex-container">
            <li><Link href="saboteur2_mus_rob_hubbard"><a target="mus_subpage">Rob Hubbard</a></Link></li>
            <li><Link href="saboteur2_mus_marcel_donne"><a target="mus_subpage">Marcel Donne</a></Link></li>
            <li><Link href="saboteur2_mus_marcel_donne_revisited"><a target="mus_subpage">Marcel Donne - Revisited</a></Link></li>
            <li><Link href="saboteur2_mus_v2009"><a target="mus_subpage">Saboteur 2 v2009</a></Link></li>
            <li><Link href="saboteur2_mus_endika"><a target="mus_subpage">Endika Fernandez - techno-mix</a></Link></li>
        </ul>

        <iframe name="mus_subpage" src="saboteur2_mus_zx48k_sp" frameBorder="0" width="780px" height="550px"
                title="Страница с плеером музыки (переключается между треками ссылками выше)"
        ></iframe>

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
            iframe[name=mus_subpage] {
                margin: 0 auto;
                overflow: hidden;
                max-width: 100%; /* keep within screen */
            }
        `}</style>
    </Layout>
)