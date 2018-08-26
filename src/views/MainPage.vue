<template>
    <div class="content-view">
        <el-row>
            <el-col :span="4" class="content-left">
                <div class="content-left">
                    <slider :url="url" :name="name"></slider>
                </div>
            </el-col>
            <el-col :span="20" class="content-right">
                <div class="content-right"></div>
            </el-col>
        </el-row>
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
.content-view {
    // min-width: 200vh;
}
.content-left {
    height: 100vh;
    min-height: 36px;
    border-right: 1px solid #cccccc;
}
.content-right {
    height: 100vh;
    min-height: 36px;
    background: #e5e9f2;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}
</style>
