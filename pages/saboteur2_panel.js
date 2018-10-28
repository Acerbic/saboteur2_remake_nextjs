import Layout from "../components/Layout"
const title = "Saboteur 2 - панель управления в игре, расшифровка сообщений, жизнь, таймер, оружие, перфокарты, содержимое"
const footer = "Описание панели в игре Saboteur 2. Расшифровка получаемых сообщений."

export default () => (
     <Layout {...{footer, title}} id="article-panel">
        <h1>Панель управления и сообщения.</h1>
        <section id="panel-overview">
            <h2>
                Описание панели управления
            </h2>
            <p>
                (будет описано позже)
            </p>
            <img src="static/images/panel.png" alt="Изображение панели состояния из игры"/>
        </section>

        <section id="panel-messages">
            <h2>
                Расшифровка сообщений
            </h2>

            <ul className="flex-container">
                <li>
                    <img src="static/images/sms_stash_searched.png" className="bordered" alt=""/>
                    <h4>"Копание в мусоре"</h4>
                    <p>
                        Это сообщение появляется когда вы НЕОДНОКРАТНО перебираете содержимое ящиков, на предмет поиска чего-либо. Бесцельный перебор предметов.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_lift_is_up.png" className="bordered" alt=""/>
                    <h4>"Лифт находится вверху"</h4>
                    <p>
                        Это сообщение появляется когда вы управляете с терминала лифтом. В данном случае лифт вызван наверх.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_lift_is_down.png" className="bordered" alt=""/>
                    <h4>"Лифт находится внизу"</h4>
                    <p>
                        Это сообщение также появляется когда вы управляете с терминала лифтом. В данном случае лифт направлен вниз.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_fence_is_on.png" className="bordered" alt=""/>
                    <h4>"Заграждение включено"</h4>
                    <p>
                        Это сообщение появляется когда вы управляете с терминала заграждением. В данном случае заграждение под напряжением.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_fence_is_off.png" className="bordered" alt=""/>
                    <h4>"Заграждение выключено"</h4>
                    <p>
                        Это сообщение также появляется когда вы управляете с терминала заграждением. В данном случае заграждение обесточено.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_code_needed.png" className="bordered" alt=""/>
                    <h4>"Требуется программа"</h4>
                    <p>
                        Это сообщение появляется когда вы управляете с терминала загрузкой перфокарт для корректировки курса ракеты. В данном случае терминал выдает сообщение о том, что ему требуются перфокарты.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_code_accepted.png" className="bordered" alt=""/>
                    <h4>"Программа принята"</h4>
                    <p>
                        Это сообщение появляется когда вы управляете с терминала загрузкой перфокарт для корректировки курса ракеты. В данном случае терминал выдает сообщение о том, что он успешно принял коды с перфокарт.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_code_rejected.png" className="bordered" alt=""/>
                    <h4>"Программа отклонена"</h4>
                    <p>
                        Это сообщение появляется когда вы управляете с терминала загрузкой перфокарт для корректировки курса ракеты. В данном случае терминал выдает сообщение о том, что программа не принята. Это может быть вызвано только тем, что вы загружаете МЕНЬШЕЕ, чем требуется, количество перфокарт. Соберите требуемое по заданию миссии количество и повторите попытку.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_bike_arrived.png" className="bordered" alt=""/>
                    <h4>"Мотоцикл прибыл"</h4>
                    <p>
                        Это сообщение появляется когда вы, двигаясь по зданию, оказываетесь НИЖЕ этажа "J". А точнее, когда оказываешься на уровне "I". Тогда данное сообщение подсказывает вам, что нужно идти к мотоциклу.
                    </p>
                </li>

                <li>
                    <img src="static/images/sms_time_is_short.png" className="bordered" alt=""/>
                    <h4>"Мало времени"</h4>
                    <p>
                        Это сообщение появляется когда количество времени, отведенное на выполнение миссии, становится меньше чем 100 единиц. А именно 99. В данном случае терминал выдает сообщение, что времени на выполнение миссии осталось мало, и следует поторопиться.
                    </p>
                </li>
            </ul>
        </section>
    </Layout>
)