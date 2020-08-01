import {
  Scene,
  Zoom,
  HeatmapLayer
} from '@antv/l7';
import {
  GaodeMap
} from '@antv/l7-maps';

export default {
  loadHeatmap() {
    const scene = new Scene({
      id: 'mapContainer',
      map: new GaodeMap({
        style: 'dark',
        pitch: 47.49999999999995,
        center: [104.071228, 30.660643],
        zoom: 7.5
      })
    });
    scene.on('loaded', () => {
      fetch(
          'https://gw.alipayobjects.com/os/basement_prod/7359a5e9-3c5e-453f-b207-bc892fb23b84.csv'
        )
        .then(res => res.text())
        .then(data => {
          const layer = new HeatmapLayer({})
            .source(data, {
              parser: {
                type: 'csv',
                x: 'lng',
                y: 'lat'
              },
              transforms: [{
                type: 'grid',
                size: 10000,
                field: 'v',
                method: 'sum'
              }]
            })
            .shape('square')
            .style({
              coverage: 1,
              angle: 0
            })
            .color(
              'count',
              [
                '#FF3417',
                '#FF7412',
                '#FFB02A',
                '#FFE754',
                '#46F3FF',
                '#02BEFF',
                '#1A7AFF',
                '#0A1FB2'
              ].reverse()
            );
          scene.addLayer(layer);
          const zoomControl = new Zoom({
            position: 'topright'
          });
          scene.addControl(zoomControl);
        });
    });
  }
}
