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
        style: 'mapbox://styles/mapbox/traffic-night-v2',
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
              '#FF4818',
              '#F7B74A',
              '#FFF598',
              '#FF40F3',
              '#9415FF',
              '#421EB2'
            ]);
          const overlayers = {
            车流量统计: layer
          };
          const layersControl = new Layers({
            overlayers
          });
          mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
          // 地图控件
          scene.addControl(layersControl);
          scene.addLayer(layer);
          scene.map.addControl(new MapboxLanguage({defaultLanguage: 'zh'}));
        });
    });

  }
}
