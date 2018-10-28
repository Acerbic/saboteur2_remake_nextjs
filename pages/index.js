import Link from 'next/link'
import Layout from "../components/Layout"
const meta_descr = "Сайт, который содержит полную информацию об игре Saboteur 2 (1987). Описаны все секреты, прохождение, показаны карты и сделаны подробные описания. Можно послушать музыку из игры. Подробно рассказано об истории создания и релизах этой игры." 
const title = "Saboteur 2 - все об игре, коды, карты, секреты, прохождения, описания, подсказки" 
const footer_note = "Saboteur 2 - все об игре - Saboteur II - Avenging Angel - лучшая игра - Saboteur2" 


export default () => (
    <Layout {...{footer_note, title, meta_descr}} className="mono-column">
        <h1>Saboteur 2 - Avenging Angel</h1>
        <img src="static/images/sab2_zx1.png" alt="Загрузочный экран игры"
        width="256" height="192"
        className="bordered" />

        <p>Этот сайт полностью посвящен одной из великих игр прошлого века - Saboteur 2.
        Очень многие, до сих пор, спустя 22 года, с удовольствием играют и горячо
        обсуждают эту игру. Поэтому, несомненно, это доказывает то, что Saboteur 2
        смело можно отнести к великим играм. Saboteur 2 хранит в себе много тайн,
        имеет непередаваемую атмосферу, необычный сюжет, огромное пространство
        для действий, а так-же, великолепный, затягивающий игровой процесс. Вот
        именно поэтому эта игра имеет полное право считаться таковой.</p>

        <p>За основу я взял оригинальную версию, разработанную для ZX Spectrum.<br />
        Это было сделано не случайно и имеет несколько причин:</p>

        <p>Во-первых, мое знакомство с Saboteur 2 как и у многих других поклонников
        игры, произошло именно на ZX Spectrum. Еще в детстве, компьютер собрал
        и подарил мне отец. Это был 1989 год. До сих пор тепло вспоминаю звуки
        загрузки игры с кассеты.</p>

        <p>Если хотите, можете <Link href="saboteur2_sab2_tape"><a>ПОСЛУШАТЬ</a></Link> загрузку
        Saboteur 2</p>

        <p>Во-вторых, версия для ZX Spectrum является самой полной и самой красивой
        из всех 5 существующих релизов.</p>

        <img src="static/images/videosab2.gif" alt="Фрагмент игрового процесса" width="256" height="192"/>

        <p>Надеюсь, Вам будет интересно изучение этого ресурса.</p>

        <p>Если Вы захотите поправить, дополнить или просто пообщаться на тему Saboteur 2
        то пишите сюда:</p>

        <p>
            <Link href="saboteur2_contacts"><a>КОНТАКТЫ</a></Link>
        </p>
    </Layout>
)