import Layout from "../components/Layout"
const title = "Saboteur 2 - общение об игре, ищем секреты, делимся мыслями, догадками, написать письмо, пишите."
const footer = "Давайте общаться на тему Saboteur 2. Свои догадки, мысли и пожелания присылайте сюда."

export default () => (
    <Layout {...{footer, title}}>
        <h1>Контакты</h1>

        <p>Все вопросы, дополнения и пожелания, пишите сюда:</p>
        <img src="static/images/email3.png" alt="Конверт" />

    </Layout>
)