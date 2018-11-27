import Layout from "../components/Layout"
const meta_descr = "Оружие и приемы в игре Saboteur 2. Подробно описаны и показано все оружие и премы, используемое ниндзей Саботером. Тактика и способы примениения приемов, эффективное использование оружия." 
const title = "Saboteur 2 - оружие и приемы, suriken, гаечный ключ, звездочка, перфокарта, удары, прыжки, приемы" 
const footer_note = "Все оружие в Saboteur 2. Тактика эффективное использование приемов." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}}>
        <h1>Оружие</h1>

        <h3>Оружие, используемое Саботёром:</h3>

        <div id="weapons" className="flex-container">
            <figure>
                <img src="/static/images/knife_held.png" alt="" width="99" height="99"/>
                <figcaption>КИНЖАЛ</figcaption>
            </figure>

            <figure>
                <img src="/static/images/pipe_held.png" alt="" width="99" height="99"/>
                <figcaption>КУСОК ТРУБЫ</figcaption>
            </figure>
    
            <figure>
                <img src="/static/images/shuriken_held.png" alt="" width="99" height="99"/>
                <figcaption>ЗВЕЗДОЧКА НИНЗЯ</figcaption>
            </figure>

            <figure>
                <img src="/static/images/g_kluch_held.png" alt="" width="99" height="99"/>
                <figcaption>ГАЕЧНЫЙ КЛЮЧ</figcaption>
            </figure>
    
            <figure>
                <img src="/static/images/steash_held.png" alt="" width="99" height="99"/>
                <figcaption>ПЕРФОКАРТА</figcaption>
            </figure>
    
            <figure>
                <img src="/static/images/nothing_held.png" alt="" width="99" height="99"/>
                <figcaption>В РУКАХ ПУСТО</figcaption>
            </figure>
    
            <figure>
                <img src="/static/images/nothing_near.png" alt="" width="99" height="99"/>
                <figcaption>В ЯЩИКЕ ПУСТО</figcaption>
            </figure>
    
            <figure>
                <img src="/static/images/nothing_near2.png" alt="" width="99" height="99"/>
                <figcaption>НИЧЕГО НЕТ</figcaption>
            </figure>
        </div>

        <h3>Приемы, с помощью которых Саботёр может сражаться со своими врагами:</h3>

        <div id="moves">
            <img src="/static/images/saboteur_stay.png" alt="" width="170" height="113"/>
            <img src="/static/images/saboteur_hand.png" alt="" width="170" height="113"/>
            <img src="/static/images/saboteur_leg_down.png" alt="" width="170" height="113"/>
            <img src="/static/images/saboteur_leg_up.png" alt="" width="170" height="113"/>
            <img src="/static/images/saboteur_sit.png" alt="" width="170" height="122"/>
            <img src="/static/images/saboteur_leg_jump.png" alt="" width="170" height="122"/>
            <img src="/static/images/saboteur_jump.png" alt="" width="170" height="122"/>
            <img src="/static/images/saboteur_climb.png" alt="" width="170" height="122"/>
            <img src="/static/images/saboteur_pull.png" alt="" width="170" height="122"/>
            <img src="/static/images/saboteur_run.png" alt="" width="170" height="122"/>
        </div>

        <h3>Средства передвижения в Saboteur 2:</h3>

        <div id="transports" className="flex-container">
            <figure>
                <figcaption>Дельтаплан, на котором Саботёр подлетает к зданию:</figcaption>
                <img src="/static/images/saboteur_on_deltaplan.png" alt="" width="170" height="122"/>
            </figure>
    
            <figure>
                <figcaption>Лифт, на котором Саботёр может передвигаться по этажам здания:</figcaption>
                <img src="/static/images/saboteur_on_lift.png" alt="" width="170" height="156"/>
            </figure>
    
            <figure>
                <figcaption>Мотоцикл, на котором Саботёр уезжает через тоннель здания:</figcaption>
                <img src="/static/images/saboteur_on_bike.png" alt="" width="170" height="122"/>
            </figure>
        </div>
        <style jsx>{`
            div#weapons figure {
                min-width: 25%;
                margin: 1em 0;
            }
        `}</style>
    </Layout>
)