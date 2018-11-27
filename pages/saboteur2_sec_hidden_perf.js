import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Секреты Saboteur 2. Описаны все секреты, показаны все тайны, не упущено абсолютно ничего." 
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets" 
const footer_note = "Saboteur 2 и его тайны. Секреты которых вы не знали." 
const page_menu_item = 'saboteur2_secret'

export default () => (
    <Layout {...{footer_note, title, meta_descr, page_menu_item}} className="mono-column">
        <h1>Секреты</h1>

        <h2>Спрятанная перфокарта</h2>
        <p>

            Для того, чтобы "честно", не пользуясь ящиком с "бесконечными" перфокартами, пройти игру, нужно суметь 
            отыскать спрятанную от доступа перфокарту. Ящик с ней находится в центре здания, в верхней его части. 
            Добраться к нему привычным способом нельзя, так-как к нему "отрезаны" все пути. Он как-бы на "острове".<br/>
            Ниже подробно описан способ добраться до ящика где лежит скрытая перфокарта:
        </p>
        <p>
            Cпрыгиваете с дельтаплана СРАЗУ, как только он достигнет СЕРЕДИНЫ экрана, чтобы приземлиться на вышке, 
            показанной ниже:
        </p>

        <img src="/static/images/secret6_1.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Далее, спускаетесь с нее по лестнице ВНИЗ, потом идете ВПРАВО, вы окажитесь на краю выступа здания - 
            падаете ВНИЗ. Приземляетесь на площадку с андроидом-охранником:
        </p>

        <img src="/static/images/secret6_2.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Идите к лестнице и лезте по ней ВВЕРХ. Далее - ВПРАВО. Окажитесь на козырьке с канатной дорогой:
        </p>

        <img src="/static/images/secret6_3.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Теперь бегите не останавливаясь по веревке ВПРАВО 6 экранов до противоположенной вышки.
        </p>

        <img src="/static/images/secret6_4.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Как доберетесь до нее - развернитесь, и бегите ОБРАТНО, в ЛЕВУЮ сторону. ВНИМАНИЕ! Когда будете бежать 5-ый 
            экран по счету, достинув середины экрана - ПРЫГАЙТЕ. Саботер должен кувыркнуться в воздухе и, сорвавшись с 
            каната начать падать вниз, но так-как он начал падать с ПРЫЖКА, его падение будет направлено в ЛЕВУЮ 
            сторону, падать он будет по-наклонной, и сможет сильно приблизиться к стене здания. Ниже показано, как 
            правильно ЭТО сделать:
        </p>

        <img src="/static/images/secret6_jmp1.png" className="bordered" alt="" width="510" height="289"/>

        <img src="/static/images/secret6_jmp2.png" className="bordered" alt="" width="510" height="289"/>

        <p>
            Пролетев 3 экрана ВНИЗ, вы окажитесь на козырьке, выступающем со стены здания. если теперь пройти ВЛЕВО, 
            вы найдете что искали. В ящичке будет заветная перфокарта:
        </p>

        <img src="/static/images/secret6.png" className="bordered" alt="" width="490" height="283"/>

        <p>
            <Link href="saboteur2_secret"><a>НАЗАД</a></Link>
        </p>
    </Layout>
)