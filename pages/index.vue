<template>
  <div class="main">
    <div class="map" id="mapContainer"></div>
    <div id="sidebar" class="right-sidebar" v-show=true>
      <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="数据汇总" sub-title="全川车流量情况" @back="() => null" />
      <velocity />
      <a-divider>时间轴</a-divider>
      <velocityPredict />
      <a-divider>时间轴</a-divider>
      <volumePredict />
      <br />
    </div>
  </div>
</template>

<script>
  import VelocityPredict from '~/components/VelocityPredict'
  import Velocity from '~/components/Velocity'
  import VolumePredict from '~/components/VolumePredict'
  import LoadMap from "../middleware/loadMap"

  export default {
    components: {
      VolumePredict,
      VelocityPredict,
      Velocity
    },
    mounted() {
      LoadMap.loadMap();
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

  .right-sidebar {
    position: fixed;
    overflow: auto;
    z-index: 2;
    left: 0;
    min-width: 550px;
    height: 100%;
    background: white;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    box-shadow: -2px 0px 0px 0px #adadad1c;
  }

</style>
