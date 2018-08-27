<template>
    <div class="content-view">
        <el-container>
            <el-aside width="300px" class="content-left">
                <slider :url="url" :name="name"></slider>
            </el-aside>
            <el-main class="content-right">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import slider from "../components/slider.vue";
export default {
    components: { slider },
    data() {
        return {
            docked: false,
            open: false,
            url:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535303474807&di=e2cc26f379778029d36d7572569dae3d&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2F3%2Fa2%2F69%2F112556869405c69a23o.jpg",
            name: "waynian"
        };
    },
    created() {},
    mounted() {},
    methods: {}
};
</script>
<style lang="scss">
.content-left {
    height: 100vh;
    border-radius: 0 !important;
    border-right: 1px solid #b0bec5;
    // margin: 0;
    // background-color: #F2F6FC;
}
.content-right {
    max-height: 100vh;
}
</style>
