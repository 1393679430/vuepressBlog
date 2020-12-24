<template>
    <div>
        <span>123</span>
        <img class="zoom-custom-imgs" :src="$withBase('/images/banner.jpg')" alt="img" />
    </div>
</template>

<script>

export default {
    data() {
        return {
        }
    },
    created: function() {
        console.log(this.$withBase, this.$withBase('/images/banner.jpg'), '$withBase')
    }
}
</script>
