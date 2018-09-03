<template>
    <div class="content-view">
        <mavon-editor v-model="value" @change="changeData" v-highlight/>
        <div class="footer-view">
              <el-button type="danger" @click="dialogVisible = true">提交</el-button>
        </div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>确定提交吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: '',
            dialogVisible: false
        };
    },
    mounted() {
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