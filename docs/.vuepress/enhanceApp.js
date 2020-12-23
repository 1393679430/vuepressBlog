import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
let showL2Dwidget = false
export default ({
    Vue,
    options,
    router
}) => {
    Vue.use(Element)
    if (showL2Dwidget) {
        L2Dwidget.init({
            "model": {
                "scale": 0.5
            },
            "display": {
                "position": "right",
                "width": 120,
                "height": 200,
                "hOffset": 0,
                "vOffset": 40
            },
            "mobile": {
                "show": true,
                "scale": 0.2
            },
            "react": {
                "opacityDefault": 0.7,
                "opacityOnHover": 0.2
            }
        });
    }
}
