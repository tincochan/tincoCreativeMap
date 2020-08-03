<template>
  <div class="main-velocity">
    <div class="map-velocity" id="map-velocity"></div>
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
    z-index: 1;
  }

  .labelclass {
    position: absolute;
    display: inline;
    cursor: pointer;
    background: #ffe478;
    border: 2px solid #fff;
    padding: 5px;
    white-space: nowrap;
    font: 700 12px/18px arial,sans-serif;
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

</style>
