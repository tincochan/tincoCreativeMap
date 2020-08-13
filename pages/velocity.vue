<template>
  <div class="main-velocity">
    <div class="map-velocity" id="map-velocity"></div>
    <a-card title="动态限速牌展示" style="width: 600px">
      <a slot="extra" href="http://171.217.92.230:59827/disaster" target="view_disaster">全国地质灾害分布</a>
      <p>参考文献： CHEN Meng et al., 2019 An algorithm-optimized car-following model based on Chengdu ring
        expressway traffic flow characteristics</p>
      <p>根据当前道路的拥堵情况为道路的车流提供预测的限速值，从而使车流顺畅地行进。</p>
      <p>图中点位坐标为数据库部分交调站坐标。</p>
    </a-card>
  </div>
</template>

<script>
  import LoadDynamicVelocity from "../middleware/loadDynamicVelocity"

  export default {
    mounted() {
      LoadDynamicVelocity.loadDynamicVelocity();
    },
  }

</script>

<style>
  .map-velocity {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .labelclass {
    position: absolute;
    display: inline;
    cursor: pointer;
    background: #ffe478;
    border: 2px solid #fff;
    padding: 5px;
    white-space: nowrap;
    font: 700 14px/18px arial, sans-serif;
    color: #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    line-height: 30px;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .l7-popup-content {
    width: 400px;
    height: 150px;
    z-index: 999;
  }

  .l7-popup-close-button {
    right: 5px;
    top: 5px;
  }

  .l7-marker {
    z-index: 0;
  }

</style>
