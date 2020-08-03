import {
  Scene,
} from '@antv/l7';
import {
  GaodeMap
} from '@antv/l7-maps';

import LoadHeatMap from "../middleware/loadHeatMap"

export default {
  loadMap() {
    const scene = new Scene({
      id: 'mapContainer',
      map: new GaodeMap({
        style: 'dark',
        pitch: 0,
        center: [104.071228, 30.660643],
        zoom: 7
      })
    });
    scene.on('loaded', () => {
      LoadHeatMap.loadHeatmap()
      scene.render()
    });
  }
}
