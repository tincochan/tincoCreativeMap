<template>
  <div class="main">
    <div class="map" id="mapContainer"></div>
  </div>
</template>

<script>
  import LoadHeatmap from "../middleware/loadHeatmap"

  export default {
    mounted() {
      LoadHeatmap.loadHeatmap();
    },
    methods: {
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
