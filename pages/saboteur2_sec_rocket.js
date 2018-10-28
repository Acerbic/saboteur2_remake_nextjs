import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Секреты Saboteur 2. Описаны все секреты, показаны все тайны, не упущено абсолютно ничего." 
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets" 
const footer_note = "Saboteur 2 и его тайны. Секреты которых вы не знали." 
const page_menu_item = 'saboteur2_secret' 

export default () => (
    <Layout {...{footer_note, title, meta_descr, page_menu_item}} className="mono-column">
        <h1>Секреты</h1>

        <h2>Отлет ракеты</h2>
        <p>
            В правой части здания, как известно, есть ракета.<br/>
            Это ее мы "перенацеливаем", вводя в ее терминал коды перфокарт.
        </p>

        <img src="static/images/roket!sn.png" className="bordered" alt="" width="255" height="510"/>

        <p>
            Название ракеты - "Colonel Briggsy Explorer"<br/>
            Что переводится как - "Исследователь Генерал Бриггси"<br/>
            Можно-ли ее запустить? Или улететь на ней?<br/>
            Вот что более 20 лет подряд будоражит умы тех, кто до сих пор помнит Saboteur 2.<br/>
            И, предположительно, "телепорт", как и "тайная комната" - являются неотемлимой честью на пути к реализации
            главного секрета Saboteur 2 - запуску ракеты. А, возможно, и отлета на ней!
        </p>

        <h2>
            Вот некоторые домыслы и рассуждения об этом:
        </h2>
        <p>
            Есть информация, что если воспользовавшись телепортом, оказаться справа у здания, и метнуть перфокарту в 
            столб (Fence) - то якобы ракета должна изчезнуть. Улететь.
        </p>

        <img src="static/images/secret5.png" className="bordered" alt="" width="490" height="283"/>

        <p>
            Пробовали. Это не сработало.<br/>
            Но кое что наводит на мысль.<br/>
            Если метаешь предметы в рабочий Fence (когда он под напряжением), Вы погибаете. Чтобы метать и не умирать -
            расстояние должно быть не менее 5 Саботеров. Это безопасное расстояние:
        </p>

        <img src="static/images/5sabs10cm.png" className="bordered" alt="" width="510" height="289"/>

        <p>
            При метании в столб справа от здания, возможности отойти на такое безопасное расстояние просто нет:
        </p>

        <img src="static/images/1sabs10cm.png" className="bordered" alt="" width="510" height="289"/>

        <p>
            Отсюда мы можем сделать предположение, что для благополучного метания необходимо посетить тайную комнату с
            вечной жизнью, либо предварительно отключить Fence...<br/>
            Надо пробовать все способы...Нужно обязательно догадаться и запустить ракету...
        </p>

        <p>
            <Link href="saboteur2_secret"><a>НАЗАД</a></Link>
        </p>
    </Layout>
)