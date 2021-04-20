<template>
  <div class="disaster">
    <div id="map-disaster" class="map-disaster"></div>
    <a-card title="全国地质灾害分布" style="width: 450px">
      <a slot="extra" href="http://172.16.11.198:3000/velocity" target="view_velocity">动态限速牌展示</a>
      <p>参考文献： CHEN Meng et al., 2019 An algorithm-optimized car-following model based on Chengdu ring
        expressway traffic flow characteristics</p>
      <p>对根据天气情况对全国泥石流、山洪等地质灾害进行预测。</p>
    </a-card>
  </div>
</template>


<script>
  import LoadDisaster from "../middleware/loadDisaster"

  export default {
    mounted() {
      LoadDisaster.loadDisaster();
    },
  }

</script>

<style>
  .map-disaster {
    position: absolute;
    width: 100%;
    height: 100%;
  }

</style>
