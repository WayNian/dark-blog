<template>
  <div class="layout">
    <div class="title-view">
      <Form label-position="left">
        <FormItem>
          <Input v-model="title" placeholder="标题" />
        </FormItem>
      </Form>
    </div>
    <mavon-editor v-model="value" @change="changeData" v-highlight />
    <div class="submit-view">
      <Button type="primary" @click="modal1 = true">提交</Button>
    </div>
    <Modal v-model="modal1" title="请选择博客标签" @on-ok="writeBlog">
      <CheckboxGroup v-model="tagArr">
        <Checkbox v-for="item in tags" :label="item" :key="item"></Checkbox>
      </CheckboxGroup>
    </Modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      value: "",
      content: "",
      title: "",
      tags: [
        "Java",
        "JavaScript",
        "Vue",
        "Node",
        "Koa",
        "Html",
        "CSS",
        "mongo",
        "前端",
        "后台"
      ],
      modal1: false,
      tagArr: []
    };
  },
  mounted() {},
  methods: {
    ...mapActions("blog", {
      createBlog: "createBlog"
    }),
    changeData(value, render) {
      this.content = render;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    writeBlog() {
      let that = this;
      if (!that.title.trim()) return this.$Message.info("标题不能为空");
      if (!that.content.trim()) return this.$Message.info("内容不能为空");
      if (!that.tagArr || !that.tagArr.length) {
        return this.$Message.info("标签不能为空");
      }
      if (that.tagArr.length > 3) {
        return this.$Message.info("标签不能超过3个");
      }
      const data = {
        title: that.title,
        content: that.content,
        tags: that.tagArr
      };
      that
        .createBlog(data)
        .then(() => {
          this.$Message.success("提交成功");
          that.clearContent();
        })
        .catch(() => {
          this.$Message.error("提交失败");
        });
    },
    clearContent() {
      let that = this;
      that.title = "";
      that.content = "";
      that.tagArr = [];
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
.v-note-wrapper.fullscreen {
  z-index: 9999 !important;
}
</style>
