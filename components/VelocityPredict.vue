<template>
  <div id="canvas-velocity"></div>
</template>

<script>
  var data = require("../data/trafficdata.json");
  export default {
    data() {
      return {
        mockData: data,
      }
    },
    mounted() {
      const line = new this.$g2.Line('canvas-velocity', {
        title: {
          visible: true,
          text: '工作日车流量速度预测模型',
        },
        description: {
          visible: true,
          text: '车流量预测算法基于LSTM，GRU以及SAEs(参考文献：Ma, et al. (2018). TrafficPredict: Trajectory Prediction for Heterogeneous Traffic-Agents. )',
        },
        color: '#0080FF',
        //数据导入
        data: this.mockData,
        xField: 'time',
        yField: 'real_speed',
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
          min:0,
          max:170,
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
      line.render()
    }
  }

</script>