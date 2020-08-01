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
        style: 'dark',
        pitch: 47.49999999999995,
        center: [104.071228, 30.660643],
        zoom: 7.5
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
