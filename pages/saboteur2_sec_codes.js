import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Секреты Saboteur 2. Описаны все секреты, показаны все тайны, не упущено абсолютно ничего." 
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets" 
const footer_note = "Saboteur 2 и его тайны. Секреты которых вы не знали." 
const page_menu_item = 'saboteur2_secret' 

export default () => (
    <Layout {...{footer_note, title, meta_descr, page_menu_item}} className="mono-column">
        <h1>Секреты</h1>

        <h2>Коды к миссиям</h2>

        <p>
            Как известно, после прохождении каждой миссии, в конце дается КОД 
            для следующего уровеня. Ниже приведен перечень кодов для доступа ко 
            всем 9 уровням:
        </p>
        <figure>
            <figcaption><p>JONIN, KIME, KUJI KIRI, SAIMENJITSU, GENIN, MI LU KATA, DIM MAK, SATORI</p></figcaption>
            <img src="static/images/mission_codes.png" className="bordered" alt="Коды к уровням" width="454" height="454"/>
        </figure>

        <p>Коды надо вводить в разделе главного меню ALTER MISSION.</p>

        <p>
            <Link href="saboteur2_secret"><a>НАЗАД</a></Link>
        </p>
    </Layout>
)