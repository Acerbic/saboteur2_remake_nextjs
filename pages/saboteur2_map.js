import Layout from "../components/Layout"
const meta_descr = "Подробная карта Saboteur 2. Показаны все уголки игры, не упущено ничего." 
const title = "Saboteur 2 - подробная карта здания, map, секреты, прохождение, описания, подробно обо всем" 
//{# const footer_note = "Карты для Saboteur 2. От простой до подробной. Показано все здание!"  #}


export default () => (
    <Layout {...{title, meta_descr}}>
        <h1>Карта Saboteur 2</h1>

        <p>
            Уменьшенная точная карта здания :
        </p>
        
        <img src="static/images/saboteur2_map_sm640.png" alt="Маленькая версия карты" width="640" height="360"/>
        
        <p>
            Полноразмерная подробная карта здания :<br />
            (Используйте скроллинг по экрану для прокрутки и просмотра)
        </p>
        
        <div id="map-container">
            <img src="static/images/saboteur2_map.png" alt="ОЧЕНЬ большой файл с картой" width="8192" height="4608"/>
        </div>
        <style jsx>{`
        #map-container {
            width: 90%;
            margin: 0 auto;
            overflow: scroll;
            max-height: 90vh;
        }

        #map-container img {
            /* restore the fat map in all its gOry */
            max-width: none;
        }

        `}</style>
    </Layout>
)
