<template>
    <div class="container">
        <div class="animated bounceInLeft list-view">
            <Card :bordered="false" v-for="(item, index) in blogList" :key="index">
                <span slot="title" class="title-text" @click="toBlogInfo(item)" style="cursor:pointer">{{item.title}}</span>
                <div>
                    <!-- <div class="time-viewß"> -->
                    {{getTime(item.createAt)}}
                    <span class="blog-list-info-text">
                        查看：200  评论：1
                    </span>
                    <!-- </div> -->
                    <div class="tag-view">
                        <Tag color="default">default</Tag>
                        <Tag color="primary">primary</Tag>
                        <Tag color="success">success</Tag>
                        <Tag color="error">error</Tag>
                        <Tag color="warning">warning</Tag>
                    </div>
                </div>

            </Card>
        </div>
        <div class="right-view animated bounceInRight">
            <Card title="热门文章" icon="md-list-box" :padding="0" shadow style="width: 340px;">
                <CellGroup>
                    <Cell title="CSS 中重要的层叠概念" to="/components/badge">
                    </Cell>
                    <Cell title="微信小游戏开发入门：从 0 到 1 实现..." to="/components/badge">
                    </Cell>
                    <Cell title="原来vue的slot可以这么玩转" to="/components/badge">
                    </Cell>
                    <Cell title="我的大前端之旅" to="/components/badge">
                    </Cell>
                    <Cell title="全网首发 | 2018 Google 开发者大会..." to="/components/badge">
                    </Cell>
                    <Cell title="Android 在 Google 开发者大会上发布..." to="/components/badge">
                    </Cell>
                    <Cell title="Iceworks 支持小程序开发" to="/components/badge">
                    </Cell>
                    <Cell title="从零开始仿写一个抖音App" to="/components/badge">
                    </Cell>
                    <Cell title="SPA路由机制详解（看不懂不要钱~~）" to="/components/badge">
                    </Cell>
                    <Cell title="Flutter「发布预览版 2」让 iOS 应..." to="/components/badge">
                    </Cell>
                </CellGroup>
            </Card>
            <Card title="导航" icon="md-list-box" :padding="0" shadow style="width: 340px; height: 400px;">
                <Tag color="red" class="right-tag">red</Tag>
                <Tag color="volcano" class="right-tag">volcano</Tag>
                <Tag color="orange" class="right-tag">orange</Tag>
                <Tag color="gold" class="right-tag">gold</Tag>
                <Tag color="yellow" class="right-tag">yellow</Tag>
                <Tag color="lime" class="right-tag">lime</Tag>
                <Tag color="green" class="right-tag">green</Tag>
                <Tag color="cyan" class="right-tag">cyan</Tag>
                <Tag color="blue" class="right-tag">blue</Tag>
                <Tag color="geekblue" class="right-tag">geekblue</Tag>
                <Tag color="purple" class="right-tag">purple</Tag>
            </Card>
        </div>
    </div>

</template>

<script>
const dateFormat = require('dateformat');
export default {
    data() {
        return {
            key: "value",
            blogList: []
        };
    },
    mounted() {
        this.getBlogList();
    },
    methods: {
        limitText(content) {
            if (content.length > 100) {
                return content.slice(0, 100) + "...";
            }
            return content;
        },
        changePage() {
            let that = this;
            that.$router.push("/blog-info");
        },
        getBlogList() {
            let that = this;
            that.$http
                .post("blog/list", {})
                .then(res => {
                    that.blogList = res.data.blogList;
                    console.log("res--->", res);
                })
                .catch(err => {
                    console.log("err---->", err);
                });
        },
        getTime(time) {
            let date = new Date(time);
            return dateFormat(date, "yyyy-mm-dd HH:MM:ss");
        },
        toBlogInfo(item) {
            this.$router.push({
                name: "blog-info",
                params: { uuid: item.uuid }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    margin-top: 80px;
    display: flex;
    justify-content: center;
}
.list-view {
    display: flex;
    width: 60%;
    align-items: center;
    flex-direction: column;
}
.ivu-card {
    width: 100%;
    border-radius: 0;
    border: 1px solid #efefef;
    line-height: 30px;
    margin-bottom: 20px;
    .title-text {
        font-size: 20px;
        font-weight: 700;
    }
    .blog-list-info-text {
        margin-left: 20px;
    }
}
.right-view {
    margin-left: 20px;
}
.tag-view {
    float: right;
}
.right-tag {
    margin: 5px 10px;
}
</style>