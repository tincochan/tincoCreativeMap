<template>
  <div class="main">
    <div class="map" id="mapContainer"></div>
  </div>
</template>

<script>
  import {
    Scene,
    PointLayer
  } from '@antv/l7';
  import {
    GaodeMap
  } from '@antv/l7-maps';

  export default {
    mounted() {
      this.loadMap();
    },
    methods: {
      loadMap() {
        const scene = new Scene({
          id: 'mapContainer',
          map: new GaodeMap({
            pitch: 35.210526315789465,
            style: 'dark',
            center: [104.037098,30.240558],
            zoom: 8
          })
        });
      }
    }
  }

</script>

<style>
  .map {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

</style>
