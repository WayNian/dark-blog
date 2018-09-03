<template>
    <div class="content-view">
        <div class="header-view">
            <div class="title-text">Vue的入门到放弃</div>
            <div class="blog-info-text">2018-08-26 字数 128 阅读 300 评论 20
                <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
            </div>
        </div>
        <mavon-editor v-html="value" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" @change="changeData" v-highlight/>
        <!-- <div v-html="value"></div> -->
        <div class="footer-view">
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import marked from "marked";
var rendererMD = new marked.Renderer();
// marked.setOptions({
//     renderer: rendererMD,
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: true,
//     smartypants: false
// });
export default {
    data() {
        return {
            value: "",
            defaultData: "preview",
            value5: 3.7,
            dialogVisible: false
        };
    },
    mounted() {
        let that = this;
        this.$http
            .post("blog/info", {})
            .then(res => {
                that.value = marked('# Hello', { sanitize: true });
                console.log("res--->", res);
            })
            .catch(err => {
                console.log("err---->", err);
            });
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
    .header-view {
        min-width: 600px;
    }
    .title-text {
        font-size: 32px;
        padding: 10px;
    }
    .blog-info-text {
        font-size: 16px;
        padding: 10px;
        margin-bottom: 20px;
        color: #cccccc;
        .el-rate {
            margin-top: 10px;
            max-width: 500px;
        }
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