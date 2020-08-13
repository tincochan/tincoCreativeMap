import {
  Scene,
  PolygonLayer,
  LineLayer,
  PointLayer
} from '@antv/l7';
import {
  Mapbox
} from '@antv/l7-maps';

export default {
  loadDisaster() {
    const scene = new Scene({
      id: 'map-disaster',
      map: new Mapbox({
        pitch: 0,
        style: 'mapbox://styles/mapbox/traffic-night-v2',
        center: [103.071228, 30.000643],
        zoom: 10.8
      })
    });
    scene.on('loaded', () => {
      fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/707cd4be-8ffe-4778-b863-3335eefd5fd5.json' //  获取行政区划
        )
        .then(res => res.json())
        .then(data => {
          const chinaPolygonLayer = new PolygonLayer({
              autoFit: true
            })
            .source(data)
            .color(
              'name',
              ['#F6CECE', '#F78181', '#FA5858', '#FE2E2E', '#FF0000']
            )
            .shape('fill')
            .style({
              opacity: 1
            });
          //  图层边界
          const layer2 = new LineLayer({
              zIndex: 2
            })
            .source(data)
            .color('#000')
            .size(0.5)
            .style({
              opacity: 1
            });

          scene.addLayer(chinaPolygonLayer);
          scene.addLayer(layer2);
        });

      fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/ab42a860-f874-4452-a8b6-4168a36c1f2c.json' //  国界线
        ).then(res => res.json())
        .then(data => {
          const boundaries = new LineLayer({
              zIndex: 2
            })
            .source(data)
            .color('rgb(93,112,146)')
            .size(1.0)
            .style({
              opacity: 1
            });

          scene.addLayer(boundaries);
        });

      fetch(
          'https://gw.alipayobjects.com/os/bmw-prod/d09a3567-8c0e-4711-b8b8-cd82e8870e4b.json' //  标注数据
        ).then(res => res.json())
        .then(data => {
          const labelLayer = new PointLayer({
              zIndex: 5
            })
            .source(data, {
              parser: {
                type: 'json',
                coordinates: 'center'
              }
            })
            .color('#E0F8F7')
            .shape('name', 'text')
            .size(14)
            .style({
              opacity: 1,
              stroke: '#1C1C1C',
              strokeWidth: 1,
              padding: [5, 5],
              textAllowOverlap: false
            });
          mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.1.0/mapbox-gl-rtl-text.js');
          scene.map.addControl(new MapboxLanguage({
            defaultLanguage: 'zh'
          }));
          scene.addLayer(labelLayer);
        });
    });
  }
}
