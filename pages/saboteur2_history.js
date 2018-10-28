import Layout from "../components/Layout"
const meta_descr = "История создания игры Saboteur 2. Все об авторе Clive Towndsend. Фирма издатель Durell Software Ltd. Интересные факты об игре. Saboteur!" 
const title = "Saboteur 2 - история создания, автор, Clive Townsend, Durell, Saboteur!, описания, факты" 
const footer_note = "История Saboteur 2. Интересные факты и все что с этим связано." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} id="article-history" className="mono-column">
        <h1>История</h1>

        <p>
            Игра Saboteur 2 увидела свет в 1987 году.<br/>
            Полное ее название - Saboteur II - Avenging Angel. Что в переводе означает "Диверсант 2 - Мстящий Ангел".<br/>
            Автор идеи и программист - Клив Таунсенд (Clive Townsend).
        </p>

        <figure>
            <figcaption>Clive Townsend</figcaption>

            <img src="static/images/clive_townsend1.jpg" className="bordered" alt="Фото Клайва Таунсенда" width="438" height="486"/>

            <p className="image-description">
                Мистер Крутой собственной персоной, Главный Саботёр Клив Таунсенд.<br/>
                Видимо, где бы он ни был, Саботёр следует за ним.<br/>
                Что это, кому-то нравится быть Вашим собственным передвижным Фан-клубом, Клив?
            </p>
            <p>
                Посмотрите внимательно на фото - наш Клив в фирменной майке Durell.
            </p>
        </figure>

        <p>
            Издателем игры Saboteur 2 была фирма Durell Software Ltd. (UK)
        </p>

        <figure>
            <figcaption>Вся тогдашняя команда Durell в сборе: (1986 год)</figcaption>

            <img src="static/images/durell_team.jpg" className="bordered" alt="" width="332" height="418"/>

            <p>
                Справа на фото мы можем наблюдать нашего любимого Клива.<br/>
                Кстати, он одет как всегда - черная кожанная куртка, черные очки, ну и конечно-же - майка Durell.
            </p>
        </figure>

        <p>
            Предшественником Saboteur 2 является первая часть игры - Saboteur!
        </p>

        <figure id="sab1-images">
            <figcaption>Saboteur! (1986)</figcaption>

            <img src="static/images/sab1_1.png" className="bordered" alt="Скрин игры Saboteur!" width="256" height="192"/>
            <img src="static/images/sab1_2.png" className="bordered" alt="Скрин игры Saboteur!" width="256" height="192"/>
            <img src="static/images/sab1_3.png" className="bordered" alt="Скрин игры Saboteur!" width="256" height="192"/>
        </figure>
    </Layout>
)