import Layout from "../components/Layout"
import Link from "next/link"
const meta_descr = ""
const title = "Saboteur 2 - звук загрузки с кассеты, магнитофон, спектрум, послушать, ностальгия" 
const footer_note = "Послушай как грузится Saboteur 2 с кассеты. Ностальгия в самом чистом виде." 
const page_menu_item = 'index' 

export default () => (
    <Layout {...{footer_note, title, meta_descr, page_menu_item}} id="article-facts" className="mono-column">
        <h1>Звук загрузки Saboteur 2 с кассеты!</h1>

        <audio controls="controls">
            <source src="static/audio/sab2_tape.ogg" type="audio/ogg" />
            <source src="static/audio/sab2_tape.mp3" type="audio/mp3" />
            <p className="update-warning">
                Обновите браузер, или используйте браузер совместимый с HTML5, чтобы прослушать музыку. Также вы можете
                скачать звуковой файл <a href="static/audio/sab2_tape.ogg">OGG</a> либо <a href="static/audio/sab2_tape.mp3">MP3</a>
                и использовать ваш системный плеер.
            </p>
        </audio>

        <figure>
            <img src="static/images/sab2_cass.png" alt="" width="600" height="450"/>
            <figcaption>
                <p>
                    Кстати, это та самая "Blue Cassette" (Синяя Кассета), о которой так много говориться при загрузке игры на 
                    следующем экране после заставки:
                </p>
            </figcaption>
        </figure>

        <figure>
            <img src="static/images/reward.png" alt="" width="592" height="439"/>
            <figcaption>
                <p>
                    Если дословно, то фирма Durell обещает БЕСПЛАТНО обменять Вашу поддельную копию игры на фирменную, и, 
                    вдобавок, за информаци о том, где и у кого Вы приобрели подделку - дать Вам 100 фунтов-стерлингов в виде 
                    награды за это.
                </p>
            </figcaption>
        </figure>

        <p>
            <Link href="/"><a>НАЗАД</a></Link>
        </p>
    </Layout>
)