<template>
  <div class="main-flowing">
    <div class="map-flowing" id="map-flowing"></div>
  </div>
</template>

<script>
  import LoadFlowing from "../middleware/loadFlowing"

  export default {
    mounted() {
      LoadFlowing.loadFlowing();
    },
  }
</script>

<style>
  .map-velocity {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

</style>
