<template>
  <div class="main-flowing">
    <div class="map-flowing" id="map-flowing"></div>
    <a-card title="全国高速公路车流量轨迹" style="width: 350px; height: 400px">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-statistic title="全网路线数" :value="251000" />
        </a-col>
        <a-col :span="12">
          <a-statistic title="油气站数" :value="6012" />
        </a-col>
        <a-col :span="12" >
          <a-statistic title="今日油耗" :value="2040000"  style="margin-top:20px"/>
        </a-col>
        <a-col :span="12">
          <a-statistic title="今日里程数" :value="51844000" style="margin-top:20px" />
        </a-col>
        <a-col :span="12">
          <a-statistic title="今日进站数" :value="1756244" style="margin-top:20px"/>
        </a-col>
        <a-col :span="12">
          <a-statistic title="今日出站数" :value="1790774" style="margin-top:20px"/>
        </a-col>
      </a-row>
    </a-card>
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
