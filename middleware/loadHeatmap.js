import {
  Scene,
  HeatmapLayer,
  Layers,
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
        pitch: 0,
        center: [105.071228, 32.660643],
        zoom: 5.3
      })
    });
    scene.on('loaded', () => {
      fetch(
          'https://gw.alipayobjects.com/os/basement_prod/7359a5e9-3c5e-453f-b207-bc892fb23b84.csv'
        )
        .then(res => res.text())
        .then(data => {
          const heatmapLayer = new HeatmapLayer({})
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
          const overlayers = {
            车流量统计: heatmapLayer
          };
          const layersControl = new Layers({
            overlayers
          });
          // 地图控件
          scene.addControl(layersControl);
          scene.addLayer(heatmapLayer);
        });
    });
  }
}
