<template>
  <div id="canvas-ConByRoad"></div>
</template>

<script>
  export default {
    data() {
      return {
        mockData: '',
      }
    },
    mounted() {
      const bulletPlot = new this.$g2.Bullet('canvas-ConByRoad', {
        title: {
          visible: true,
          text: '全网拥堵情况评估',
        },
        description: {
          visible: true,
          text: '速度和间距由原始数据提供，车道数设置为3，仿真循环次数设置为5，变道发生有利效果的概率为60%。参考文献：Chen. et al., (2016) A global optimization algorithm for trajectory data based car-following model calibration. Transportation Research Part C, 68, pp. 311-332.'
        },
        data: [{
          title: 'Road',
          measures: [1.58],
          targets: [2.5],
          ranges: [0, 0.6, 0.8, 1],
        }],
        rangeMax: 3,
        rangeColors: ['#FF0000', '#FFFF00', '#00FF00'],
        height: 180,
        width: 800,
        legend: {
          custom: true,
          visible: true,
          // position: 'bottom-center',
          items: [{
              name: '道路拥堵值', // 图例项的文本内容
              marker: {
                symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
                style: {
                  fill: '#000000', // 该图例项 marker 的填充颜色
                },
              },
            },
            {
              name: '目标值', // 图例项的文本内容
              marker: {
                symbol: 'line', // 该图例项 marker 的形状，参见 marker 参数的说明
                style: {
                  stroke: '#FFFF00', // 该图例项 marker 的填充颜色
                },
              },
            },
            {
              name: '重度拥堵', // 图例项的文本内容
              marker: {
                symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
                style: {
                  fill: '#FF0000', // 该图例项 marker 的填充颜色
                },
              },
            },
            {
              name: '拥堵', // 图例项的文本内容
              marker: {
                symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
                style: {
                  fill: '#FFDBA2', // 该图例项 marker 的填充颜色
                },
              },
            },
            {
              name: '畅通', // 图例项的文本内容
              marker: {
                symbol: 'square', // 该图例项 marker 的形状，参见 marker 参数的说明
                style: {
                  fill: '#58FA58', // 该图例项 marker 的填充颜色
                },
              },
            },
          ],
        },
      })
      bulletPlot.render()
    }
  }

</script>
