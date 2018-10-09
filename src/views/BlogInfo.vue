<template>
    <div class="content-view">
        <div class="header-view">
            <div class="title-text">{{title}}</div>
            <div class="blog-info-text">2018-08-26 字数 128 阅读 300 评论 20
            </div>
        </div>
        <mavon-editor v-html="value" v-highlight/>
        <!-- <div v-html="value" v-highlight></div> -->
        <div class="footer-view">
        </div>
    </div>
</template>

<script>
import marked from "marked";
var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
export default {
    data() {
        return {
            value: "",
            defaultData: "preview",
            value5: 3.7,
            dialogVisible: false,
            title: ""
        };
    },
    mounted() {
        this.getBlogInfo();
    },
    methods: {
        changeData(value, render) {
            console.log(render);
        },
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        getBlogInfo() {
            let that = this;
            let uuid = that.$route.params.uuid;
            this.$http
                .post("blog/info", { uuid })
                .then(res => {
                    console.log("res--->", res);
                    // that.value = res.data.content
                    that.title = res.data.blogList.title;
                    that.value = marked(res.data.blogList.content, {
                        sanitize: true
                    });
                    // that.value = res.data.blogList.content;
                })
                .catch(err => {
                    console.log("err---->", err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.content-view {
    padding: {
        left: 20%;
        right: 20%;
    }
    margin-top: 20px;
    .header-view {
        min-width: 600px;
    }
    .title-text {
        font-size: 32px;
        padding: 10px;
    }
    .blog-info-text {
        font-size: 14px;
        padding: 10px;
        margin-bottom: 20px;
        color: #cccccc;
    }
    .footer-view {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }
}
</style>