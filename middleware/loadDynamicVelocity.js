import {
  Scene,
  Marker,
  Popup
} from '@antv/l7';
import {
  GaodeMap
} from '@antv/l7-maps';

export default {
  loadDynamicVelocity() {
    const scene = new Scene({
      id: 'map-velocity',
      map: new GaodeMap({
        style: 'dark',
        pitch: 0,
        center: [103.071228, 30.000643],
        zoom: 7.1
      })
    });
    scene.on('loaded', () => {
      addMarkers();
      scene.render();
      addTraffic();
    });

    function addMarkers() {
      fetch(
          'http://172.16.11.198:3001/data/station.json'
        )
        .then(res => res.json())
        .then(nodes => {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].g !== '1' || nodes[i].v === '') {
              continue;
            }
            const el = document.createElement('label');
            el.className = 'labelclass';
            el.textContent = nodes[i].v;
            el.style.background = "#fff";
            el.style.borderColor = "#fff";
            el.style.boxShadow = "0 0 0 8px red";
            const marker = new Marker({
              element: el
            }).setLnglat({
              lng: nodes[i].x * 1,
              lat: nodes[i].y
            });
            scene.addMarker(marker);
            marker.on('click', (e) => {
              const popup = new Popup({
                offsets: [ 0, 0 ],
                closeButton: true,
              })
                .setLnglat([nodes[i].x, nodes[i].y])
                .setHTML(`<h3>详情</h3><p>当前交调站：${nodes[i].n}</p><p>经纬度：${nodes[i].x}, ${nodes[i].y}</p><p>建议行驶速度：${nodes[i].v}km/h</p>`);
              scene.addPopup(popup);
            });
          }
        });
    }

    function addTraffic() {
      //实时路况图层
      const trafficLayer = new AMap.TileLayer.Traffic({
        zIndex: 3
      });
      scene.map.add(trafficLayer);
    }

    function getColor(v) {
      return v < 20 ?
        '#800026' :
        v < 30 ?
        '#BD0026' :
        v < 55 ?
        '#E31A1C' :
        v < 70 ?
        '#FC4E2A' :
        v < 85 ?
        '#FD8D3C' :
        v < 90 ?
        '#FEB24C' :
        v < 100 ?
        '#FED976' :
        '#FFEDA0';
    }
  }

}
