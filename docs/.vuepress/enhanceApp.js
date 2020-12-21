import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../style/index.css'

export default ({
    Vue,
    options,
    router
}) => {
    Vue.use(Element)
    L2Dwidget.init({
        "model": {
            "scale": 0.5
        },
        "display": {
            "position": "right",
            "width": 120,
            "height": 200,
            "hOffset": 0,
            "vOffset": -20
        },
        "mobile": {
            "show": true,
            "scale": 0.5
        },
        "react": {
            "opacityDefault": 0.7,
            "opacityOnHover": 0.2
        }
    });
}
