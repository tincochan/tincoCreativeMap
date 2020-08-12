import {
  Scene,
  Marker
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
    });

    function addMarkers() {
      fetch(
          'http://171.217.92.230:59801/data/station.json'
        )
        .then(res => res.json())
        .then(nodes => {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].g !== '1' || nodes[i].v === '') {
              continue;
            }
            const el = document.createElement('label');
            el.className = 'labelclass';
            el.textContent = nodes[i].v + 'm/s';
            el.style.background = getColor(nodes[i].v);
            el.style.borderColor = getColor(nodes[i].v);
            const marker = new Marker({
              element: el
            }).setLnglat({
              lng: nodes[i].x * 1,
              lat: nodes[i].y
            });
            scene.addMarker(marker);
            marker.on('click', () => {console.log(nodes[i].v)});
          }
        });
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
