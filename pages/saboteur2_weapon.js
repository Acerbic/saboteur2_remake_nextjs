import Layout from "../components/Layout"
const title = "Saboteur 2 - оружие и приемы, suriken, гаечный ключ, звездочка, перфокарта, удары, прыжки, приемы"
const footer = "Все оружие в Saboteur 2. Тактика эффективное использование приемов."

export default () => (
    <Layout {...{footer, title}}>
        <h1>Оружие</h1>

        <h3>Оружие, используемое Саботёром:</h3>

        <div id="weapons" className="flex-container">
            <figure>
                <img src="static/images/knife_held.png" alt=""/>
                <figcaption>КИНЖАЛ</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/pipe_held.png" alt=""/>
                <figcaption>КУСОК ТРУБЫ</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/shuriken_held.png" alt=""/>
                <figcaption>ЗВЕЗДОЧКА НИНЗЯ</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/g_kluch_held.png" alt=""/>
                <figcaption>ГАЕЧНЫЙ КЛЮЧ</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/steash_held.png" alt=""/>
                <figcaption>ПЕРФОКАРТА</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/nothing_held.png" alt=""/>
                <figcaption>В РУКАХ ПУСТО</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/nothing_near.png" alt=""/>
                <figcaption>В ЯЩИКЕ ПУСТО</figcaption>
            </figure>
    
            <figure>
                <img src="static/images/nothing_near2.png" alt=""/>
                <figcaption>НИЧЕГО НЕТ</figcaption>
            </figure>
        </div>

        <h3>Приемы, с помощью которых Саботёр может сражаться со своими врагами:</h3>

        <div id="moves">
            <img src="static/images/saboteur_stay.png" alt=""/>
            <img src="static/images/saboteur_hand.png" alt=""/>
            <img src="static/images/saboteur_leg_down.png" alt=""/>
            <img src="static/images/saboteur_leg_up.png" alt=""/>
            <img src="static/images/saboteur_sit.png" alt=""/>
            <img src="static/images/saboteur_leg_jump.png" alt=""/>
            <img src="static/images/saboteur_jump.png" alt=""/>
            <img src="static/images/saboteur_climb.png" alt=""/>
            <img src="static/images/saboteur_pull.png" alt=""/>
            <img src="static/images/saboteur_run.png" alt=""/>
        </div>

        <h3>Средства передвижения в Saboteur 2:</h3>

        <div id="transports" className="flex-container">
            <figure>
                <figcaption>Дельтоплан, на котором Саботёр подлетает к зданию:</figcaption>
                <img src="static/images/saboteur_on_deltaplan.png" alt=""/>
            </figure>
    
            <figure>
                <figcaption>Лифт, на котором Саботёр может передвигаться по этажам здания:</figcaption>
                <img src="static/images/saboteur_on_lift.png" alt=""/>
            </figure>
    
            <figure>
                <figcaption>Мотоцикл, на котором Саботёр уезжает через тоннель здания:</figcaption>
                <img src="static/images/saboteur_on_bike.png" alt=""/>
            </figure>
        </div>
    </Layout>
)