import { Scene, LineLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

export default{
    loadFlowing(){
        const scene = new Scene({
            id: 'map-flowing',
            map: new GaodeMap({
                style: 'dark',
                pitch: 0,
                center: [100.071228, 36.660643],
                zoom: 5
              })
          });
          scene.on('loaded', () => {
            fetch('https://gw.alipayobjects.com/os/rmsportal/UEXQMifxtkQlYfChpPwT.txt')
              .then(res => res.text())
              .then(data => {
                const layer = new LineLayer({
                  blend: 'normal'
                })
                  .source(data, {
                    parser: {
                      type: 'csv',
                      x: 'lng1',
                      y: 'lat1',
                      x1: 'lng2',
                      y1: 'lat2'
                    }
                  })
                  .size(1)
                  .shape('line')
                  .animate({
                    enable: true,
                    interval: 0.1,
                    trailLength: 0.5,
                    duration: 2
                  })
                  .color('#FF00FF')
                  .style({
                    opacity: 0.8
                  });
                scene.addLayer(layer);
              });
          });
          
    }
}