import Layout from "../components/Layout"
const title = "Saboteur 2 - враги, андроид, охранник, пума, android, guard, puma, описания"
const footer = "Saboteur 2 и его враги. Узнай кто они прежде чем они достанут тебя."

export default () => (
    <Layout {...{footer, title}}>
        <h1>Враги</h1>
        <h3>Андроид охранник</h3>
        <img src="static/images/android_stay.png" alt="Андроид стоит" />
        <img src="static/images/android_leg.png" alt="Андроид пинает" />
        <img src="static/images/android_gun.png" alt="Андроид стреляет" />
        <img src="static/images/android_flames.gif" alt="Андроид испускает пламя" />

        <h3>Пума</h3>
        <img src="static/images/puma.png" alt="Пума" />

        <h3>Летучая мышь</h3>
        <img src="static/images/flying_bat.png" alt="Летучая мышь" />

    </Layout>
)