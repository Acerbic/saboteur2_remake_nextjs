import React from 'react'
import Layout from "../components/Layout"
import ImageMap from "../components/ImageMap"
const meta_descr = "Подробная карта Saboteur 2. Показаны все уголки игры, не упущено ничего." 
const title = "Saboteur 2 - подробная карта здания, map, секреты, прохождение, описания, подробно обо всем" 
//{# const footer_note = "Карты для Saboteur 2. От простой до подробной. Показано все здание!"  #}


export default class MapPage extends React.Component {

    render () {
        return (
            <Layout {...{title, meta_descr}}>
                <h1>Карта Saboteur 2</h1>

                <div id="ol-container">
                    <ImageMap />
                </div>

                <noscript>
                    <p>
                        Уменьшенная точная карта здания :
                    </p>
                    
                    <img src="/static/images/saboteur2_map_sm640.png" alt="Маленькая версия карты" width="640" height="360"/>
                    
                    <p>
                        Полноразмерная подробная карта здания :<br />
                        (Используйте скроллинг по экрану для прокрутки и просмотра)
                    </p>
                    
                    <div id="map-container">
                        <img src="/static/images/saboteur2_map.png" alt="ОЧЕНЬ большой файл с картой" width="8192" height="4608"/>
                    </div>
                </noscript>
        
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

                <style jsx global>{`
                    html.noJs #ol-container {
                        display: none;
                    }
                    #ol-container {
                        padding: 2em;
                        width: 1002px;
                        max-width: 90%;
                        box-sizing: border-box;
                        border: thin solid gray;
                        margin: 0 auto;
                        height: calc(100vh - 20em);
                        /* this translate is an odd fix to an odd issue with
                        OpenLayers library - when dimension of a container
                        is ~just wrong~ (i.e. 1001.3px), there happens
                        a rounding error and the image gets a bit distorted */
                        transform: translateZ(0);
                    }
                    @media (max-width: 415px), (max-height: 415px) {
                        .page {
                            display: flex;
                            flex-direction: column;
                            height: calc(100vh - 8px);
                            margin-bottom: 8px;
                        }
                        .page header {
                            flex-shrink: 0; /* no funny business please */
                        }
                        .page article {
                            /*flex-grow: 1;*/
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                        }
                        .page article h1 {
                            margin: 0 0 0.5em;
                        }
                        div#ol-container {
                            flex-grow: 1;
                            padding: 0;
                            border: none;
                            width: 100%;

                            /* this prevents this div being extended by its content
                            - div stays fit into the window.
                            */
                            overflow: hidden;

                            padding: 0;
                            width: 100%;
                            max-width: 100%;
                            height: 100%;
                            max-height: 100%;
                        }
                    }
                `}</style>
            </Layout>
        )
    }
}
