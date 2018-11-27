import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Секреты Saboteur 2. Описаны все секреты, показаны все тайны, не упущено абсолютно ничего." 
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets" 
const footer_note = "Saboteur 2 и его тайны. Секреты которых вы не знали." 
const page_menu_item = 'saboteur2_secret' 

export default () => (
    <Layout {...{footer_note, title, meta_descr, page_menu_item}} className="mono-column">
        <h1>Секреты</h1>

        <h2>Ящик с "бесконечными" перфокартами</h2>

        <p>
            Задачей практически каждой миссии является сбор так называемых перфокарт (Paper Tape). Собирать их нужно в маленьких ящиках, отыскивая среди оружия, находящеося в них. В одном из многочисленных ответвлений подвальных тоннелей, кстати, прямо под "тайной комнатой", а точнее, всего несколькими этажами ниже, находится один из таких ящиков, но содержащий не одну, а БЕСКОНЕЧНОЕ множество этих перфокарт. Работает эта "бесконечность" только при условии, что Вы подходите к этому ящику НЕ С ПУСТЫМИ РУКАМИ. Если подойти к нему без педмета - Вы сможете получить лишь ДВЕ перфокарты и...все. Поэтому - какой-либо предмет или оружие должно быть у Вас в руке ОБЯЗАТЕЛЬНО. И тогда, когда Вы начнете "перебирать" предметы в этом ящике, предмет, с которым Вы подошли к нему, будет включен в цепочку предметов и при каждом повторном прохождении перебора Вы будете снова получать по одной перфокарте - и так до бесконечности! Они НИКОГДА не кончатся! Все это позволяет собрать необходимое количество перфокарт не бегая по всему комплексу. Ниже показано местоположение этого ящика и как к нему добраться:
        </p>

        <p>
            Летим на дельтаплане до самого конца, пока Саботер сам не спрынет с него. Окажемся на козырьке:
        </p>

        <img src="/static/images/secret2_1.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Далее, спускаемся ВНИЗ, бежим ВЛЕВО, снова ВНИЗ, бежим 2 экрана ВПРАВО, потом ВНИЗ до упора (2 экрана), потом ВЛЕВО, будет вот такое препятствие-"ездилка":
        </p>

        <img src="/static/images/secret2_2.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Синхронно пробегаем по этой "ездилке" ВЛЕВО, теперь ВНИЗ до упора (3 экрана), как спуститесь, бегите ВПРАВО на 2 экрана, потом ВНИЗ - увидите комнату с ДВУМЯ лестницами ведущими вниз и двумя охранниками:
        </p>

        <img src="/static/images/secret2_3.png" className="bordered" alt="" width="255" height="170"/>
        <p>
            По ЛЮБОЙ из этиз лестниц спускаетесь на 4 этажа ВНИЗ и бегите ВЛЕВО. Через 2 экрана окажитесь в переходе в подземелье:
        </p>

        <img src="/static/images/secret2_4.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Забегаете туда, бежите еще 4 экрана ВЛЕВО, и окажитесь на лестнице, ведущей только ВНИЗ:
        </p>

        <img src="/static/images/secret2_5.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Спускаетесь по этой лестнице на 4 этажа ВНИЗ и там увидите ответвление ВПРАВО. Идите туда - будет тупик, и там находится ящик "сбесконечными" перфокартами: Вот это место:
        </p>

        <img src="/static/images/secret2.png" className="bordered" alt="" width="490" height="283"/>

        <p>
            <Link href="saboteur2_secret"><a>НАЗАД</a></Link>
        </p>
    </Layout>
)