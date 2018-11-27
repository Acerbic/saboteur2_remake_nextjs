import Layout from "../components/Layout"
const meta_descr = "Здесь полностью описаны способы, тактика и подробное прохождение игры Saboteur 2." 
const title = "Saboteur 2 - тактика и прохождение, коды, карты, секреты, описания, подсказки и многое другое" 
const footer_note = "Тактика к игре Saboteur 2. Подробное прохождение." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} className="mono-column">
        <h1>Тактика и прохождение</h1>
        <h2>Препятствие "Ездилка"</h2>

        <img src="/static/images/ezdilkas.gif" className="bordered" alt="" width="510" height="289"/>

        <p>
            Чтобы успешно преодолеть это препятствие, необходимо, точно расчитав, начать бежать "вместе" с подвижным 
            блином. Ниже показано как это делать:<br/>
        </p>

        <img src="/static/images/sab_on_ezdilka.png" className="bordered" alt="" width="510" height="289"/>

        <h2>Препятствие "Обманный пол"</h2>
        <p>
            Эти, на первый взгляд безобидные "вставки" в полу на самом деле не что иное как дыры.<br/>
            Если наступить на них - то провалишся на этаж ниже. Это может как отнять жизнь так и забрать драгоценное 
            время на лишние действия, чтобы снова подняться на этаж.
        </p>

        <img src="/static/images/dyrka1.png" className="bordered" alt="" width="510" height="289"/>

        <p>
            Просто перепрыгивайте их - и все.
        </p>

        <img src="/static/images/dyrka2.png" className="bordered" alt="" width="510" height="289"/>

        <p>
            Кстати, иногда эти отверстия в полу могут и пригодиться - например, если надо попасть на этаж ниже, а до 
            лестницы бежать не хочется, или на это мало времени.
        </p>

    </Layout>
)