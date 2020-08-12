import {
  Scene,
  Layers,
  HeatmapLayer
} from '@antv/l7';
import {
  Mapbox
} from '@antv/l7-maps';

export default {
  loadHeatmap() {
    const scene = new Scene({
      id: 'mapContainer',
      map: new Mapbox({
        style: 'dark',
        pitch: 43,
        center: [103.071228, 29.000643],
        zoom: 6.0
      })
    });
    scene.on('loaded', () => {
      fetch(
          'http://171.217.92.230:59801/data/heatmap.csv'
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
                type: 'hexagon',
                size: 25000,
                field: 'v',
                method: 'sum'
              }]
            })
            .size('sum', sum => {
              return sum * 200;
            })
            .shape('hexagonColumn')
            .style({
              coverage: 0.8,
              angle: 0,
              opacity: 1.0
            })
            .color('sum', [
              '#094D4A',
              '#146968',
              '#1D7F7E',
              '#289899',
              '#34B6B7',
              '#4AC5AF',
              '#5FD3A6',
              '#7BE39E',
              '#A1EDB8',
              '#C3F9CC',
              '#DEFAC0',
              '#ECFFB1'
            ]);
          const overlayers = {
            车流量统计: layer
          };
          const layersControl = new Layers({
            overlayers
          });
          // 地图控件
          scene.addControl(layersControl);
          scene.addLayer(layer);
        });
    });

  }
}
