import React from 'react'
import 'ol/ol.css';

class ImageMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = { map: null };
    }

    componentDidMount() {
        import('./olMods')
            .then( ({olMap, olView, ImageLayer, ImageStatic}) => {
                const map = new olMap({
                    target: 'map',
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
            .catch( e => console.log(e) )
    }

    render () {
        return (
            <div id="map" style={ {maxHeight: '80vh'} }>
            </div>
        );
    }
};

export default ImageMap;