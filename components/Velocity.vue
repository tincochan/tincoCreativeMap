<template>
  <div id="canvas-dynamicVelocity"></div>
</template>

<script>
  var data = require("../data/velocity.json");
  export default {
    data() {
      return {
        mockData: data,
      }
    },
    mounted() {
      const columnPlot = new this.$g2.Bar('canvas-dynamicVelocity', {
        title: {
          visible: true,
          text: '全国实时观测车辆速度',
        },
        description: {
          visible: true,
          text: '该观测点位的实时数据每隔15分钟刷新',
        },
        color:'#642EFE',
        //数据导入
        data: this.mockData,
        xField: '速度',
        yField: '车辆',
        animation: {
          appear: {
            animation: 'clipingWithData',
          },
        },
        //x轴横向滚动条
        interactions: [{
          type: 'slider',
          cfg: {
            start: 0,
            end: 1,
          },
        }, ],
        //x轴格式
        xAxis: {
          visible: true,
          grid: {
            visible: true,
            style: {
              stroke: '#e3e8ec',
              lineWidth: 1,
              lineDash: [0, 0],
            },
          },
          line: {
            visible: true,
            style: {
              stroke: 'black',
              lineWidth: 1,
            },
          },
          tickLine: {
            visible: true,
            style: {
              stroke: 'black',
              lineWidth: 1,
            },
          },
          label: {
            visible: true,
            style: {
              fill: 'black',
            },
          },
        },
        //y轴样式
        yAxis: {
          visible: true,
          grid: {
            visible: true,
            style: {
              stroke: '#e3e8ec',
              lineWidth: 1,
              lineDash: [0, 0],
            },
          },
          line: {
            visible: true,
            style: {
              stroke: 'black',
              lineWidth: 1,
            },
          },
          tickLine: {
            visible: true,
            style: {
              stroke: 'black',
              lineWidth: 1,
            },
          },
          label: {
            visible: true,
            style: {
              fill: 'black',
            },
          },
        }
      })
      columnPlot.render()
    }
  }
</script>

