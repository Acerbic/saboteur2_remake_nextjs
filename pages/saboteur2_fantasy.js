import Layout from "../components/Layout"
const meta_descr = "Фантазии и домыслы об игре Saboteur 2. Размышления и догадки, мифы и реальность, много интересного." 
const title = "Saboteur 2 - фантазии  об игре, домыслы, секреты, загадочные моменты, все самое любопытное." 
const footer_note = "Saboteur 2 рождает Фантазии...Любопытные домыслы на эту тему." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}} className="mono-column">
        <h1>Фантазии</h1>

        <p>
            Дельтаплан упал на край здания....и Саботёр найдет его там.
        </p>

        <img src="/static/images/fantasy1.png" className="bordered" alt="" width="397" height="198"/>

        <p>
            ...хмм, надпись "NINA" на первой ступени ракеты...Это сделал Саботёр?
        </p>

        <img src="/static/images/fantasy3.png" className="bordered" alt="" width="553" height="354"/>

        <p>
            Запуск ракеты осуществлен! Она улетела....возможно вместе с Саботёром?
        </p>

        <img src="/static/images/fantasy2.png" className="bordered" alt="" width="255" height="510"/>

    </Layout>
)