import Layout from "../components/Layout"
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets"
const footer = "Saboteur 2 и его тайны. Секреты которых вы не знали."

export default () => (
    <Layout {...{footer, title}} id="article-secrets">
        <h1>Секреты</h1>

        <ul className="flex-container">
            <li><a href="saboteur2_sec_codes.html">КОДЫ К УРОВНЯМ</a></li>
            <li><a href="saboteur2_sec_room.html">ТАЙНАЯ КОМНАТА - БЕССМЕРТИЕ</a></li>
            <li><a href="saboteur2_sec_teleport.html">ТЕЛЕПОРТ</a></li>
            <li><a href="saboteur2_sec_infinit_perf.html">ЯЩИК С БЕСКОНЕЧНЫМИ ПЕРФОКАРТАМИ</a></li>
            <li><a href="saboteur2_sec_hidden_perf.html">СКРЫТАЯ ПЕРФОКАРТА</a></li>
             {/* <li><a href="saboteur2_sec_migrate_perf.html">МИГРИРУЮЩАЯ ПЕРФОКАРТА</a></li>  */}
            <li><a href="saboteur2_sec_neisp_perf.html">НЕИСПОЛЬЗУЕМЫЕ ПЕРФОКАРТЫ</a></li>
            <li><a href="saboteur2_sec_rocket.html">ОТЛЕТ РАКЕТЫ</a></li>
             {/* <li><a href="saboteur2_sec_timer.html">ОСТАНОВКА ТАЙМЕРА</a></li>  */}
        </ul>

        <p>
            Свои догадки, решения, поправки и дополнения Вы можете присылать сюда:
        </p>

        <p>
            <a href="saboteur2_contacts.html">КОНТАКТЫ</a>
        </p>
    </Layout>
)