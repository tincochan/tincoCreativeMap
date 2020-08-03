<template>
  <div class="main">
    <div class="map" id="mapContainer"></div>
    <div id="sidebar" class="right-sidebar" v-show=true>
      <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="数据汇总" sub-title="全国车流量情况" @back="() => null" />
      <velocity />
      <a-divider>时间轴</a-divider>
      <velocityPredict />
      <a-divider>时间轴</a-divider>
      <volumePredict />
      <br />
    </div>
    <div class="map-label">
      <a-card title="川高之最" class="flowing-card">
        <a slot="extra" href="http://172.16.11.198:9000/" target="view_window">详情</a>
        <a-row :gutter="16">
          <a-col :span="12">
            <a-statistic title="事故路损最多：都映" :value="379840">
              <template #prefix>
                <a-icon type="frown" theme="twoTone" />
              </template>
              <template #suffix>
                <span>元</span>
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="12">
            <a-statistic title="事故死亡最多：雅泸高速" :value="6" class="demo-class">
              <template #prefix>
                <a-icon type="fire" theme="twoTone" two-tone-color="#FF0000" />
              </template>
               <template #suffix>
                <span>人</span>
              </template>
            </a-statistic>
          </a-col>
          <a-col :span="12">
            <a-statistic title="通行减免最多：绵广绵阳北站" :value="569.32" class="demo-class" style="margin-top:10px">
              <template #prefix>
                <a-icon type="heat-map" />
              </template>
               <template #suffix>
                <span>万元</span>
              </template>
            </a-statistic>
          </a-col>         
          <a-col :span="12">
            <a-statistic title="互通枢纽最堵：白家立交" :value="636" class="demo-class" style="margin-top:10px">
              <template #prefix>
                <a-icon type="heat-map" />
              </template>
               <template #suffix>
                <span>h</span>
              </template>
            </a-statistic>
          </a-col>
           <a-col :span="12">
            <a-statistic title="单次拥堵最久：成南" :value="987" class="demo-class" style="margin-top:10px">
              <template #prefix>
                <a-icon type="heat-map" />
              </template>
               <template #suffix>
                <span>min</span>
              </template>
            </a-statistic>
          </a-col>
        </a-row>
      </a-card>
    </div>
  </div>
</template>

<script>
  import VelocityPredict from '~/components/VelocityPredict'
  import Velocity from '~/components/Velocity'
  import VolumePredict from '~/components/VolumePredict'
  import LoadHeatMap from "../middleware/loadHeatmap"

  export default {
    components: {
      VolumePredict,
      VelocityPredict,
      Velocity
    },
    mounted() {
      LoadHeatMap.loadHeatmap();
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

  .flowing-card {
    position: absolute;
    z-index: 3;
    right: 10px;
    top: 60px;
    width: 450px;
    height: 400px;
  }

</style>
