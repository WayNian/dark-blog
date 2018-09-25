<template>
    <div class="layout">
        <div class="title-view">
            <Form label-position="left">
                <FormItem>
                    <Input v-model="title" placeholder="标题"></Input>
                </FormItem>
            </Form>
        </div>
        <mavon-editor v-model="value" @change="changeData" v-highlight/>
        <div class="submit-view">
            <Button type="primary" @click="modal1 = true">提交</Button>
        </div>
        <Modal v-model="modal1" title="请选择博客标签" @on-ok="writeBlog">
            <CheckboxGroup v-model="tagArr">
                <Checkbox v-for="item in lable" :label="item" :key="item"></Checkbox>
            </CheckboxGroup>
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: "",
            content: "",
            title: "",
            lable: [
                "Java",
                "JavaScript",
                "Vue",
                "Node",
                "Koa",
                "Html",
                "CSS",
                "mongo"
            ],
            modal1: false,
            tagArr: []
        };
    },
    mounted() {},
    methods: {
        changeData(value, render) {
            let that = this;
            that.content = value;
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
            if (!that.title.trim()) return this.$Message.info("标题不能为空");
            if (!that.content.trim()) return this.$Message.info("内容不能为空");
            if (!that.tagArr || !that.tagArr.length)
                return this.$Message.info("标签不能为空");
            const data = {
                title: that.title,
                content: that.content,
                tags: that.tagArr
            };
            that.$http
                .post("blog/write", data)
                .then(res => {
                    this.$Message.success("提交成功");
                    that.clearContent();
                    console.log("res--->", res);
                })
                .catch(err => {
                    this.$Message.error("提交失败");
                    console.log("err---->", err);
                });
        },
        clearContent() {
            let that = this;
            that.title = "";
            that.content = "";
            that.tagArr = "";
            that.value = "";
        }
    }
};
</script>

<style lang="scss" scoped>
.layout {
    padding: 10px;
    background-color: #ffffff !important;
    .submit-view {
        text-align: center;
        margin-top: 20px;
    }
    .v-note-wrapper {
        z-index: 1;
    }
}
</style>