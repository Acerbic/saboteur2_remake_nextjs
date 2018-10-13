import Layout from "../components/Layout"

const title = "Saboteur 2 - подробная карта здания, map, секреты, прохождение, описания, подробно обо всем"
const footer = "Карты для Saboteur 2. От простой до подробной. Показано все здание!"

export default () => (
    <Layout {...{footer, title}}>
        <h1>Карта Saboteur 2</h1>

        <p>
            Уменьшенная точная карта здания :
        </p>
        
        <img src="static/images/saboteur2_map_sm640.png" alt="" />
        
        <p>
            Полноразмерная подробная карта здания :<br />
            (Используйте скроллинг по экрану для прокрутки и просмотра)
        </p>
        
        <div id="map-container">
            <img src="static/images/saboteur2_map.png" alt="" />
        </div>
    </Layout>
)