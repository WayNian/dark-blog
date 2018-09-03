<template>
    <div>
        <div class="head-view">
            <img :src="url" alt="" srcset="" class="animated rubberBand">
            <div>{{name}}</div>
        </div>
        <div class="menu-view">
            <div v-for="(item, index) in menuArr" :key="index" @click="changePage(index)">
                <div class="menu-btn" icon="el-icon-search">{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["url", "name"],
    data() {
        return {
            menuArr: ["主页", "分类", "归档", "标签", "友链", "关于"]
        };
    },
    methods: {
        changePage(index) {
            let that = this
            switch (index) {
                case 0:
                    that.$router.replace('/')
                    break;
                case 1:
                that.$router.replace('/about')
                    break;
                case 2:
                that.$router.replace('/link')
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                default:
                    break;
            }
        }
    }
};
</script>

<style lang = "scss" scoped>
.head-view {
    width: 100%;
    background-color: #009688;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
    div {
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 34px;
        color: #fff;
        font-weight: 400;
    }
}
.menu-view {
    .el-button {
        width: 100%;
        border: 0;
        margin-top: 30px;
    }
    .menu-btn {
        width: 100%;
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        color: #606266;
        text-align: center;
        box-sizing: border-box;
        outline: 0;
        margin: 20px 0 0 0;
        -webkit-transition: 0.1s;
        transition: 0.1s;
        font-weight: 500;
        padding: 12px 20px;
        font-size: 24px;
        font-weight: 500;
        &:hover {
            color: #4db6ac;
        }
    }
}
</style>