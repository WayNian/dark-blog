<template>
    <div class="content-view">
        <div class="header-view">
            <div class="title-text">Vue的入门到放弃</div>
            <div class="blog-info-text">2018-08-26 字数 128 阅读 300 评论 20
                <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}"> </el-rate>
            </div>
        </div>
        <mavon-editor v-model="value" :subfield="false" :defaultOpen="defaultData" :toolbarsFlag="false" @change="changeData" />
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
import highlightjs from "highlight.js";
import "highlight.js/styles/googlecode.css";
export default {
    data() {
        return {
            value: `<blockquote>
<p>你好</p>
</blockquote>
<p><code>vue</code></p>`,
            defaultData: "preview",
            value5: 3.7,
            dialogVisible: false
        };
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
        left: 25%;
        right: 25%;
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