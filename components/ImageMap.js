import React from 'react'
import 'ol/ol.css';

class ImageMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = { map: null };
    }

    componentDidMount() {
        import('./olMods')
            .then(({ olMap, olView, ImageLayer, ImageStatic, defaultControls, FullScreen }) => {
                const map = new olMap({
                    target: 'ol-map',
                    controls: defaultControls().extend([
                        new FullScreen({ label: 'Fullscreen' })
                    ]),
                    layers: [
                        new ImageLayer({
                            source: new ImageStatic({
                                url: '/static/images/saboteur2_map.png',
                                imageExtent: [0, 0, 8192, 4608]
                            })
                        })
                    ],
                    view: new olView({
                        // constraints
                        extent: [0, 0, 8192, 4608],
                        minResolution: 1,
                        maxResolution: 16,
                        enableRotation: false,
                        // initial position and zoom
                        center: [4000, 2000],
                        resolution: 1
                    })
                });
                this.setState({ map });
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div id="ol-container">
                <div id="ol-map">
                </div>
                <style jsx>{`
                    #ol-container {
                        padding: 2em;
                        width: 1001.3px;
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
                    #ol-map {
                        height: 100%;
                    }
                `}</style>
                <style jsx global>{`
                    button.ol-full-screen-false {
                        font-weight: normal;
                        width: unset;
                        padding: 0 1em;
                    }
                `}</style>
            </div>
        );
    }
};

export default ImageMap;