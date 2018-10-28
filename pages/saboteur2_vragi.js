import Layout from "../components/Layout"
const meta_descr = "Все враги игры Saboteur 2. Сдесь показаны все враги, которых можно встретить в игре, будь то андроид-охранник, пума или летучая мышь." 
const title = "Saboteur 2 - враги, андроид, охранник, пума, android, guard, puma, описания" 
const footer_note = "Saboteur 2 и его враги. Узнай кто они прежде чем они достанут тебя." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}}>
        <h1>Враги</h1>
        <h3>Андроид охранник</h3>
        <img src="static/images/android_stay.png" alt="Андроид стоит" width="170" height="122"/>
        <img src="static/images/android_leg.png" alt="Андроид пинает" width="170" height="122"/>
        <img src="static/images/android_gun.png" alt="Андроид стреляет" width="170" height="122"/>
        <img src="static/images/android_flames.gif" alt="Андроид испускает пламя" width="255" height="122"/>

        <h3>Пума</h3>
        <img src="static/images/puma.png" alt="Пума" width="170" height="122"/>

        <h3>Летучая мышь</h3>
        <img src="static/images/flying_bat.png" alt="Летучая мышь" width="170" height="122"/>

    </Layout>
)