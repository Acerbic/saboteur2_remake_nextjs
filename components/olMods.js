/**
 * Bunch of modules that should be linked on a client are grouped together
 * to have a single dynamic import() statement, instead of importing each 
 * separately. This helps reducing both number for requests and amount of 
 * traffic - since some of the modules have common components down the import 
 * tree. (approx 25% save on weight and number of request 4 -> 1)
 */

export {default as olMap} from 'ol/Map'
export {default as olView} from 'ol/View'
export {default as ImageLayer} from 'ol/layer/Image'
export {default as ImageStatic} from 'ol/source/ImageStatic'
export {defaults as defaultControls, FullScreen} from 'ol/control.js'