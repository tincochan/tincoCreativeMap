import {
  Scene,
  Zoom
} from '@antv/l7';
import {
  GaodeMap
} from '@antv/l7-maps';

export default {
  zoom() {
    const sceneZoom = new Scene({
      id: 'mapContainer',
      map: new GaodeMap({
      })
    });
    sceneZoom.on('loaded', () => {
      const zoomControl = new Zoom({
        position: 'topright'
      });
      sceneZoom.addControl(zoomControl);
    });
  }
}
