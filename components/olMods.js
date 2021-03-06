/**
 * Bunch of modules that should be linked on a client are grouped together
 * to have a single dynamic import() statement, instead of importing each 
 * separately. This helps reducing both number of requests and amount of 
 * traffic - since some of the modules have common components down the import 
 * tree. (approx 25% save on weight and number of request 4 -> 1)
 */

export {default as olMap} from 'ol/Map'
export {default as olView} from 'ol/View'
export {default as TileLayer} from 'ol/layer/Tile.js'
export {XYZ} from 'ol/source.js'
export {defaults as defaultControls, FullScreen} from 'ol/control.js'
