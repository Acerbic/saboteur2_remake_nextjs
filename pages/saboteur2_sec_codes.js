import Layout from "../components/Layout"
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets"
const footer = "Saboteur 2 и его тайны. Секреты которых вы не знали."
// {% set page_menu_item = 'saboteur2_secret.html' %}

export default () => (
    <Layout {...{footer, title}} className="mono-column">
        <h1>Секреты</h1>

        <h2>Коды к миссиям</h2>

        <p>
            Как известно, после прохождении каждой миссии, в конце дается КОД 
            для следующего уровеня. Ниже приведен перечень кодов для доступа ко 
            всем 9 уровням:
        </p>
        <figure>
            <figcaption><p>JONIN, KIME, KUJI KIRI, SAIMENJITSU, GENIN, MI LU KATA, DIM MAK, SATORI</p></figcaption>
            <img src="static/images/mission_codes.png" className="bordered" alt="Коды к уровням" />
        </figure>

        <p>Коды надо вводить в разделе главного меню ALTER MISSION.</p>

        <p>
            <a href="saboteur2_secret.html">НАЗАД</a>
        </p>
    </Layout>
)