import Layout from "../components/Layout"
const title = "Saboteur 2 - вся музыка и обработки из игры, Rob Hubbard, Marcel Donne, Endika, ZX Spectrum, Amstard CPC, Commodore C64, IBM PC, послушать, скачать, звук, ремикс, ремейк, remix"
const footer = "Вся музыка Saboteur 2. Слушай и наслаждайся как оригинальными версиями так и ремейками."

export default () => (
    <Layout {...{footer, title}} id="article-music">
        <h1>Музыка из Saboteur 2</h1>
        <section className="mono-column">

        <p>
            Роб Хуббард (Rob Hubbard) является создателем оригинальной композиции в Saboteur 2.<br />
            Изначально он написал ее на компьютере Commodore C64, а для других платформ она была немного переработана 
            исходя из музыкальных чипов, установленных на них.
        </p>

        <img src="static/images/rob_hubbard1.jpg" className="bordered" alt=""/>

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
            <li><a target="mus_subpage" href="saboteur2_mus_zx48k_sp.html">Spectrum 48k</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_zx128k_ay.html">Spectrum 128k</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_amstrad_cpc.html">Amstrad CPC</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_c64.html">Commodore C64</a></li>
        </ul>
        <h3>Обработки и ремиксы</h3>
        <ul className="flex-container">
            <li><a target="mus_subpage" href="saboteur2_mus_rob_hubbard.html">Rob Hubbard</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_marcel_donne.html">Marcel Donne</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_marcel_donne_revisited.html">Marcel Donne - Revisited</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_v2009.html">Saboteur 2 v2009</a></li>
            <li><a target="mus_subpage" href="saboteur2_mus_endika.html">Endika Fernandez - techno-mix</a></li>
        </ul>

        <iframe name="mus_subpage" src="saboteur2_mus_zx48k_sp.html" frameborder="0" width="780px" height="550px"></iframe>
    </Layout>
)