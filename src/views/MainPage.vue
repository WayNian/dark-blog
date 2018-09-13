<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                我爱你
            </Header>
            <Content :style="{margin: '88px 0 0 0 0', background: '#fff', minHeight: '500px'}">
                 <router-view></router-view>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
</template>
<script>
import slider from "../components/slider.vue";
import header from "../components/header.vue";
export default {
    components: { slider, header },
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
.layout {
    border: 1px solid #d7dde4;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.ivu-layout-header {
    background-color: #fff;
    color: #FFCC33;
    font-size: 30px;
}
.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav {
    width: 520px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center {
    text-align: center;
}
</style>
