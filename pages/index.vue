<template>
  <div class="main">
    <div class="map" id="mapContainer"></div>
  </div>
</template>

<script>
  import LoadHeatmap from "../middleware/loadHeatmap"
  import Zoom from "../middleware/zoom"

  export default {
    mounted() {
      LoadHeatmap.loadHeatmap();
      Zoom.zoom();

    },
    methods: {}
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
