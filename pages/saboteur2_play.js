import Layout from "../components/Layout"
const meta_descr = "Здесь можно поиграть в Saboteur 2 онлайн! Просто нажми и играй. Вспомни детство вместе с эмулятором игры Saboteur2." 
const title = "Saboteur 2 - все об игре, коды, карты, секреты, прохождения, описания, подсказки" 
const footer_note = "Играть Saboteur 2 в наши дни. Игра on-line - вспомни детство." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} id="article-play" className="mono-column">

        <h1>Играть Saboteur 2 сегодня!</h1>
        <img src="static/images/sab2_zx1.png" alt="Загрузочный экран игры" width="256" height="192"/>

        <p>
            Несмотря на прошедшие годы, вы можете сыграть в эту игру и сегодня - используя эмуляторы!
            Для этого можно <a href="https://fms.komkon.org/Speccy">скачать эмулятор</a> соответствующей системы и запустить
            на нём файл игры, который требуется получить отдельно.
        </p>

        <p>
            Другой вариант - использовать <a href="http://torinak.com/qaop" target="_blank">онлайн-эмулятор</a> (работает в 
            браузере!)
        </p>

        <p>
            Файлы игры бывают в разных форматах, и, к сожалению, не все эмуляторы открывают каждый формат.
            <a href="http://www.planetemu.net/rom/sinclair-zx-spectrum-z80/saboteur-ii-avenging-angel-1987-durell-15">Этот файл
            </a> можно открыть в браузерном эмуляторе (для скачивания нажмите на кнопку &laquo;Télécharger&raquo;). А для запуска 
            <a href="https://romsmania.cc/roms/zx-spectrum/saboteur-ii-avenging-angel-1987-durell-software-268005">этого</a> 
            потребуется скачать эмулятор по ссылке выше.
        </p>

        <style jsx>{`
            #article-play a {
                font-size: 1em;
                text-decoration: underline;
                font-style: italic;
                font-family: Arial;
                color: lightskyblue;
            }
        `}</style>
    </Layout>
)