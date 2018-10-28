import Link from "next/link"
import Layout from "../components/Layout"
const meta_descr = "Секреты Saboteur 2. Описаны все секреты, показаны все тайны, не упущено абсолютно ничего." 
const title = "Saboteur 2 - все секреты и тайны, коды, бессмертие, перфокарты, ракета, тайная комната, телепорт, таймер, secrets" 
const footer_note = "Saboteur 2 и его тайны. Секреты которых вы не знали." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} id="article-secrets">
        <h1>Секреты</h1>

        <ul className="flex-container">
            <li><Link href="saboteur2_sec_codes"><a>КОДЫ К УРОВНЯМ</a></Link></li>
            <li><Link href="saboteur2_sec_room"><a>ТАЙНАЯ КОМНАТА - БЕССМЕРТИЕ</a></Link></li>
            <li><Link href="saboteur2_sec_teleport"><a>ТЕЛЕПОРТ</a></Link></li>
            <li><Link href="saboteur2_sec_infinit_perf"><a>ЯЩИК С БЕСКОНЕЧНЫМИ ПЕРФОКАРТАМИ</a></Link></li>
            <li><Link href="saboteur2_sec_hidden_perf"><a>СКРЫТАЯ ПЕРФОКАРТА</a></Link></li>
            {/*<li><Link href="saboteur2_sec_migrate_perf"><a>МИГРИРУЮЩАЯ ПЕРФОКАРТА</a></Link></li>*/}
            <li><Link href="saboteur2_sec_neisp_perf"><a>НЕИСПОЛЬЗУЕМЫЕ ПЕРФОКАРТЫ</a></Link></li>
            <li><Link href="saboteur2_sec_rocket"><a>ОТЛЕТ РАКЕТЫ</a></Link></li>
            {/*<li><Link href="saboteur2_sec_timer"><a>ОСТАНОВКА ТАЙМЕРА</a></Link></li>*/}
        </ul>

        <p>
            Свои догадки, решения, поправки и дополнения Вы можете присылать сюда:
        </p>

        <p>
            <Link href="saboteur2_contacts"><a>КОНТАКТЫ</a></Link>
        </p>
    </Layout>
)