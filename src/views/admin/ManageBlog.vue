<template>
    <div class="layout">
        <div class="title-view">
            <el-input v-model="title" placeholder="标题"></el-input>
        </div>
        <mavon-editor v-model="value" @change="changeData" v-highlight/>
        <div class="footer-view">
            <el-button type="danger" @click="dialogVisible = true">提交</el-button>
        </div>
        <el-dialog title="请选择标签" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <el-checkbox-group v-model="checkList">
                <el-checkbox v-for="item in lable" label="item" :key="item"></el-checkbox>
            </el-checkbox-group>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="writeBlog()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            content: "",
            dialogVisible: false,
            title: "",
            lable: ['Java', 'JavaScript', 'Vue', 'Node', 'Koa', 'Html', 'CSS', 'mongo' ],
            checkList: []
        };
    },
    mounted() {},
    methods: {
        changeData(value, render) {
            let that = this
            that.content = value
        },
        handleClose(done) {
            this.$confirm("确认关闭？")
                .then(_ => {
                    done();
                })
                .catch(_ => {});
        },
        writeBlog() {
            let that = this;
            that.dialogVisible = false;
            const data = {
                title: that.title,
                content: that.content
            };
            that.$http
                .post("blog/write", data)
                .then(res => {
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
.layout {
    padding: 10px;
    .title-view {
        margin-bottom: 20px;
    }
    .header-view {
        min-width: 600px;
    }
    .v-note-wrapper {
        min-height: 70vh;
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