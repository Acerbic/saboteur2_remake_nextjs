import Layout from "../components/Layout"
const title = "Saboteur 2 - фантазии  об игре, домыслы, секреты, загадочные моменты, все самое любопытное."
const footer = "Saboteur 2 рождает Фантазии...Любопытные домыслы на эту тему."

export default () => (
    <Layout {...{footer, title}} className="mono-column">
        <h1>Фантазии</h1>

        <p>
            Дельтоплан упал на край здания....и Саботёр найдет его там.
        </p>

        <img src="static/images/fantasy1.png" className="bordered" alt=""/>

        <p>
            ...хмм, надпись "NINA" на первой ступени ракеты...Это сделал Саботёр?
        </p>

        <img src="static/images/fantasy3.png" className="bordered" alt=""/>

        <p>
            Запуск ракеты осуществлен! Она улетела....возможно вместе с Саботёром?
        </p>

        <img src="static/images/fantasy2.png" className="bordered" alt=""/>

    </Layout>
)