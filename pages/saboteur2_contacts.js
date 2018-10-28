import Layout from "../components/Layout"
const meta_descr = "Здесь можно написать письмо, оставить свой отзыв о сайте, и просто пообщаться на тему игры Saboteur 2" 
const title = "Saboteur 2 - общение об игре, ищем секреты, делимся мыслями, догадками, написать письмо, пишите." 
const footer_note = "Давайте общаться на тему Saboteur 2. Свои догадки, мысли и пожелания присылайте сюда." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}}>
        <h1>Контакты</h1>

        <p>Все вопросы, дополнения и пожелания, пишите сюда:</p>
        <img src="static/images/email3.png" alt="Конверт и адрес email - sabotwo@gmail.com" width="398" height="267"/>

    </Layout>
)