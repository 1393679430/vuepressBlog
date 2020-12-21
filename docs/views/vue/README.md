<template>
  <div class="test-demo">
    {{ msg }}
    <my-hello></my-hello>
    <el-button>button</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello VuePress!'
    }
  },
  created: function() {
    alert(333);
    setTimeout(() => {
            L2Dwidget.init({
                    "model": {
                            "scale": 0.5
                    },
                    "display": {
                            "position": "right",
                            "width": 180,
                            "height": 260,
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
    }, 1000)
  },
}
</script>
