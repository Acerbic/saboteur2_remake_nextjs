import Layout from "../components/Layout"
const meta_descr = "Здесь приводится описание предметов в игре Saboteur 2. Подробно рассказано и показано обо всех интересных местах в игре, показаны иллюстрации всех предметов, указано что для чео нужно." 
const title = "Saboteur 2 - предметы и окружение, препятствия, описание, подсказки, локации, экран, действия" 
const footer_note = "Окружающие предметы в игре Saboteur 2. Показано все что есть и даже больше." 

export default () => (
    <Layout {...{footer_note, title, meta_descr}}>
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
                    <img src="static/images/video_scr_tree!s.gif" alt="Монитор камеры 1" width="102" height="102"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera1.png" width="490" height="283" className="room bordered" alt="Комната, которую видно через камеру 1"/>
                </li>

                <li>
                    <img src="static/images/video_scr_rope!s.gif" alt="Монитор камеры 4" width="102" height="102"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera4.png" width="490" height="283" className="room bordered" alt="Комната, которую видно через камеру 4"/>
                </li>

                <li>
                    <img src="static/images/video_scr_exit!s.gif" alt="Монитор камеры 3" width="102" height="102"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera3.png" width="490" height="283" className="room bordered" alt="Комната, которую видно через камеру 3"/>
                </li>

                <li>
                    <img src="static/images/video_scr_lift!s.gif" alt="Монитор камеры 2" width="102" height="102"/>
                    <p>
                        Это изображение передается с камеры, установленной в ЭТОМ месте:
                    </p>
                    <img src="static/images/camera2.png" width="490" height="283" className="room bordered" alt="Комната, которую видно через камеру 2"/>
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
        
                <img src="static/images/fences.gif" height="323" width="539" className="bordered" alt="Локация игры с заграждением под напряжением"/>
        
                <p>
                    Эту защиту можно отключить, если прийти в ПРАВУЮ ВЕРХНЮЮ часть здания, (комната СПРАВА от ракеты) и, 
                    воспользовавшись терминалом, установить позицию в положение "FENCE IS OFF".
                </p>
            </div>
        </section>
        <style jsx>{`
            ul#cameras-list li { margin-bottom: 4em; }
        `}</style>
    </Layout>
)