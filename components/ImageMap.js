import React from 'react'
import 'ol/ol.css';

class ImageMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = { map: null };
    }

    componentDidMount() {
        const olMap = import('ol/Map');
        const olView = import('ol/View');
        const ImageLayer = import('ol/layer/Image');
        const ImageStatic = import('ol/source/ImageStatic');

        Promise.all([olMap, olView, ImageLayer, ImageStatic])
            .then( (modules) => {

                const [olMap, olView, ImageLayer, ImageStatic] = modules.map(m => m.default);

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
                        center: [4000, 2000],
                        minResolution: 1,
                        maxResolution: 16,
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