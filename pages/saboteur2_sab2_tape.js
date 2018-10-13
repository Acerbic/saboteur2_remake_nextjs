import Layout from "../components/Layout"
const title = "Saboteur 2 - звук загрузки с кассеты, магнитофон, спектрум, послушать, ностальгия"
const footer = "Послушай как грузится Saboteur 2 с кассеты. Ностальгия в самом чистом виде."
// {% set page_menu_item = 'index.html' %}

export default () => (
    <Layout {...{footer, title}} id="article-facts" className="mono-column">
        <h1>Звук загрузки Saboteur 2 с кассеты!</h1>

        <audio src="audio/sab2_tape.mp3" controls="controls">
            Обновите браузер, или используйте браузер совместимый с HTML5, чтобы прослушать музыку. Либо, вы можете
            <a href="audio/sab2_tape.mp3">скачать звуковой файл</a>
            и использовать ваш системный плеер.

            <object type="application/x-shockwave-flash" data="mus/mp3play.swf" height="0" width="0">
                <param name="wmode" value="transparent"/>
                <param name="allowFullScreen" value="true"/>
                <param name="allowScriptAccess" value="false"/>
                <param name="movie" value="mus/mp3play.swf"/>
                <param name="FlashVars" value="way=mus/sab2_tape.mp3&amp;swf=mus/mp3play.swf&amp;w=0&amp;h=0&amp;time_seconds=0&amp;autoplay=1&amp;q=1&amp;skin=black&amp;volume=70&amp;comment="/>
            </object>
        </audio>

        <img src="static/images/sab2_cass.png" alt=""/>
        <p>
            Кстати, это та самая "Blue Cassette" (Синяя Кассета), о которой так много говориться при загрузке игры на 
            следующем экране после заставки:
        </p>

        <img src="static/images/reward.png" alt=""/>

        <p>
            Если дословно, то фирма Durell обещает БЕСПЛАТНО обменять Вашу поддельную копию игры на фирменную, и, 
            вдобавок, за информаци о том, где и у кого Вы приобрели подделку - дать Вам 100 фунтов-стерлингов в виде 
            награды за это.
        </p>

        <p>
            <a href="saboteur2_secret.html">НАЗАД</a>
        </p>
    </Layout>
)