import Layout from "../components/Layout"
const title = "Saboteur 2 - предметы и окружение, препятствия, описание, подсказки, локации, экран, действия"
const footer = "Окружающие предметы в игре Saboteur 2. Показано все что есть и даже больше."

export default () => (
    <Layout {...{footer, title}}>
        <h1>Предметы и окружение</h1>

        <section id="cameras">
            <h3>ВИДЕОКАМЕРЫ</h3>
            <p>
                В игре, в пяти местах, есть специальные мониторы, отображающие видео-камеры установленные в некоторых комнатах. 
                Работают эти мониторы синхронно, т.е. показываю одну картинку единовременно все. Ниже показаны все 4 
                отображаемые видеокамеры и места, где они установлены:
            </p>

            <ul id="cameras-list" className="flex-container">
                <li>
                    <img src="static/images/video_scr_tree!s.gif" alt="Монитор камеры 1"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera1.png" className="bordered" alt="Комната, которую видно через камеру 1"/>
                </li>

                <li>
                    <img src="static/images/video_scr_rope!s.gif" alt="Монитор камеры 4"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera4.png" className="bordered" alt="Комната, которую видно через камеру 4"/>
                </li>

                <li>
                    <img src="static/images/video_scr_exit!s.gif" alt="Монитор камеры 3"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera3.png" className="bordered" alt="Комната, которую видно через камеру 3"/>
                </li>

                <li>
                    <img src="static/images/video_scr_lift!s.gif" alt="Монитор камеры 2"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera2.png" className="bordered" alt="Комната, которую видно через камеру 2"/>
                </li>
            </ul>
        </section>

        <section id="fence">
            <h3>ЗАЩИТНОЕ ЗАГРАЖДЕНИЕ</h3>
    
            <div className="mono-column">
                <p>
                    У каждого выхода здания, справа и слева, есть специальные заграждения (FENCE). Как правило эти заграждения 
                    находятся под напряжением. Это мешает Саботёру покинуть периметр:
                </p>
        
                <img src="static/images/fences.gif" className="bordered" alt="Локация игры с заграждением под напряжением"/>
        
                <p>
                    Эту защиту можно отключить, если прийти в ПРАВУЮ ВЕРХНЮЮ часть здания, (комната СПРАВА от ракеты) и, 
                    воспользовавшись терминалом, установить позицию в положение "FENCE IS OFF".
                </p>
            </div>
        </section>
    </Layout>
)