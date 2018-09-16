<template>
    <div class="container">
        <div class="animated bounceInLeft list-view">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <img src="../assets/keda.png" alt="">
                <article>Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                    Content of no border type. Content of no border type. Content of no border type. Content of no border type. 
                </article>
            </Card>

            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </div>
        <div class="right-view animated bounceInRight">
            <Card title="导航" icon="md-list-box" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" />
                <Cell title="Link" extra="details" to="/components/button" />
                <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch slot="extra" />
                </Cell>
            </CellGroup>
        </Card>
        </div>
    </div>

</template>

<script>
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
    align-items: center;
    flex-direction: column;
}
.ivu-card {
    width: 1000px;
    border-radius: 0;
    border: 1px solid #efefef;
    img {
        float: left;
        width: 100px;
        height: 100px;
    }
}
.right-view {
    margin-left: 20px; 
}
</style>