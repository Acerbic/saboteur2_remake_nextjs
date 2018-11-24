import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Секреты Saboteur 2. Описаны все секреты, показаны все тайны, не упущено абсолютно ничего." 
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets" 
const footer_note = "Saboteur 2 и его тайны. Секреты которых вы не знали." 
const page_menu_item = 'saboteur2_secret' 

export default () => (
    <Layout {...{footer_note, title, meta_descr, page_menu_item}} className="mono-column">
        <h1>Секреты</h1>

        <h2>Тайная комната - бессмертие</h2>

        <p>
            В здании существует тайная комната, посещение которой дает Вам бессмертие.<br/>
            Ниже указано местоположение этой комнаты и как добраться к ней:
        </p>

        <p>
            Летим на дельтаплане до самого конца, пока Саботер сам не спрынет с него.<br/>
            Окажемся на козырьке:
        </p>

        <img src="static/images/secret1_1.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Далее, бегите ВЛЕВО, потом на 2 экрана ВВЕРХ, теперь бегите НАЛЕВО, окажитесь на краю здания, падаете ВНИЗ, 
            пока не приземлитесь на козырьке c канатной дорожкой:
        </p>

        <img src="static/images/secret1_2.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Бегите по веревке 2 экрана ВЛЕВО, не останавливаясь, пока не добежите до вышки с андроидом-охранником:
        </p>

        <img src="static/images/secret1_3.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            далее, спускаемся ВНИЗ до упора и бежим ВПРАВО, подаем ВНИЗ, пролетаем 2 экрана и оказываемся на козырьке 
            входа в здание, спригиваем с козырька, бежим НАЛЕВО в здание, продолжая двигаться ВЛЕВО спускаемся по 
            ступенькам ВНИЗ:
        </p>

        <img src="static/images/secret1_4.png" className="bordered" alt="" width="255" height="170"/>

        <p>
            Как спустимся со ступенек еще раз ВЛЕВО - окажемся в оружейной. Там будет много ящиков и охрана из 2-ух 
            андроидов. Это и будет место, через которое проникают в тайную комнату "вечной жизни":
        </p>

        <p>
            Вот это место:
        </p>

        <img src="static/images/secret1.png" className="bordered" alt="" width="490" height="283"/>

        <p>
            Подойдите к ящикам и встаньте так, чтобы одна нога была видна СПАВА от ящика, а друая скрывалась на ним - 
            и нажмите ВНИЗ. Вы должны оказаться в тайной комнате.
        </p>
        <p>

            Тут подробно показано КАК проникнуть в тайную комнату:
        </p>

        <img src="static/images/secret_rooms.gif" className="bordered" alt="" width="510" height="289"/>

        <p>
            После посещения этой комнаты вы получите "бессмертие".
        </p>

        <p>
            <Link href="saboteur2_secret"><a>НАЗАД</a></Link>
        </p>
    </Layout>
)