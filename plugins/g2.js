//plugins/g2.js
import Vue from 'vue'
let g2 = require("@antv/g2plot")

Vue.prototype.$g2 = g2
//nuxt.config.js
export default {
 plugins: [
    {
      src: "~/plugins/g2",
      ssr: false
    },
  ]
}