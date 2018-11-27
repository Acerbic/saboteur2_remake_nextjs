/**
 * This Component renders a map widget similar to Google Maps.
 * It is using OpenLayers library (http://openlayers.org/).
 * 
 * One important detail is that the widget is using dynamic import feature of
 * NextJS - importing module 'olMods' strictly from the client browser, not in
 * SSR. This is due to organization of OpenLayers - it uses features detection 
 * during module linking, as far as I understand, and because of that requires
 * presence of 'window' object, which is not existing during SSR.
 */

import React from 'react'
import 'ol/ol.css';

class ImageMap extends React.Component {
    constructor(props) {
        super(props);

        this.state = { map: null };
    }

    /**
     * 'componentDidMount' executes only in client, unlike 'render', which
     * can be executed in both client and SSR
     */
    componentDidMount() {
        // dynamic import
        import('./olMods')
            .then(({ olMap, olView, defaultControls, FullScreen, TileLayer, XYZ }) => {

                const ol_map = document.querySelector("#ol-map");
                const container = ol_map.parentElement;

                // fitting into container
                const container_size = this.getContentSize(container);
                ol_map.style.height = `${container_size.height}px`;
                ol_map.style.width = `${container_size.width}px`;

                // adjusting to pixel-exact boundaries
                const ol_par_rect = container.getBoundingClientRect();
                ol_map.style.position = 'relative';
                ol_map.style.left = `${Math.ceil(ol_par_rect.left) - ol_par_rect.left}px`;
                ol_map.style.top = `${Math.ceil(ol_par_rect.top) - ol_par_rect.top}px`;
                
                const map = new olMap({
                    target: 'ol-map',
                    pixelRatio: 1,
                    controls: defaultControls().extend([
                        new FullScreen({ label: 'Fullscreen' })
                    ]),
                    layers: [
                        new TileLayer({
                            /* hell if I know what those multiplicators are about */
                            extent: [-8192*256*16, -4608*256*16, 8192*256*16, 4608*256*18],
                            source: new XYZ({
                                wrapX: false,
                                url: '/static/images/maptiles/{z}-{x}-{y}.png',
                            })
                        })
                    ],
                    view: new olView({
                        // constraints
                        extent: [-8192*256*9, -4608*256*2, 8192*256*9, 4608*256*16],
                        minZoom: 1,
                        maxZoom: 5,
                        enableRotation: false,
                        // initial position and zoom
                        center: [0, 0],
                        zoom: 5
                    })
                });
                
                this.setState({ map });

                window.addEventListener("resize", () => {

                    const container_size = this.getContentSize(container);
                    ol_map.style.height = `${container_size.height}px`;
                    ol_map.style.width = `${container_size.width}px`;

                    this.state.map.updateSize();
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <div id="ol-map">
                {/* Have to put this style into global, since DOM produced
                    by OpenLayers doesn't receive style-jsx scoped class name
                */}
                <style jsx global>{`
                    #ol-map {
                        height: 100%;
                    }
                    button.ol-full-screen-false {
                        font-weight: normal;
                        width: unset;
                        padding: 0 1em;
                    }
                `}</style>
            </div>
        );
    }

    /**
     * Get size of content-box of an element
     * (see https://stackoverflow.com/questions/25197184/get-the-height-of-an-element-minus-padding-margin-border-widths)
     * @param {HTMLElement} element 
     */
    getContentSize(element) {
        const computedStyle = getComputedStyle(element);
        
        let elementHeight = element.clientHeight;  // height with padding
        let elementWidth = element.clientWidth;   // width with padding
        
        elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
        elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
        return {width: elementWidth, height: elementHeight}
    }
};

export default ImageMap;