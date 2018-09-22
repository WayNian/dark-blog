<template>
    <div class="container">
        <div class="animated bounceInLeft list-view">
            <Card :bordered="false" v-for="(item, index) in blogList" :key="index">
                <span slot="title">{{item.title}}</span>
                <div>
                    <!-- <div class="time-viewß"> -->
                    {{getTime(item.createAt)}}
                    <!-- </div> -->
                    <!-- <div class="tag-view"> -->
                    <Tag color="default">default</Tag>
                    <Tag color="primary">primary</Tag>
                    <Tag color="success">success</Tag>
                    <Tag color="error">error</Tag>
                    <Tag color="warning">warning</Tag>
                    <!-- </div> -->
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
            <Card title="导航" icon="md-list-box" :padding="0" shadow style="width: 340px; height: 400px; overflow: scroll;">
                <Tree :data="data1" style="padding-left: 10px;"></Tree>
            </Card>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            key: "value",
            blogList: [],
            data1: [
                {
                    title: "2018年09月",
                    // expand: true,
                    children: [
                        {
                            title: "2018年09月22日",
                            children: [
                                {
                                    title: "2018年09月22日"
                                },
                                {
                                    title: "2018年09月22日"
                                }
                            ]
                        },
                        {
                            title: "2018年09月22日",
                            children: [
                                {
                                    title: "2018年09月22日"
                                },
                                {
                                    title: "2018年09月22日"
                                }
                            ]
                        }
                    ]
                },
                {
                    title: "2018年08月",
                    // expand: true,
                    children: [
                        {
                            title: "2018年09月22日",
                            children: [
                                {
                                    title: "2018年09月22日"
                                },
                                {
                                    title: "2018年09月22日"
                                }
                            ]
                        },
                        {
                            title: "2018年09月22日",
                            children: [
                                {
                                    title: "2018年09月22日"
                                },
                                {
                                    title: "2018年09月22日"
                                }
                            ]
                        }
                    ]
                }
            ]
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
            return date.toLocaleDateString();
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
    span {
        font-size: 20px;
        font-weight: 700;
    }
}
.right-view {
    margin-left: 20px;
}
.ivu-tag {
    float: right;
}
</style>