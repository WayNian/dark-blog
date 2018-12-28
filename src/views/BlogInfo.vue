<template>
    <div class="content-view">
        <div class="header-view">
            <div class="title-text">{{blogInfo.title}}</div>
            <div class="blog-info-text">2018-08-26 字数 128 阅读 300 评论 20
            </div>
        </div>
        <mavon-editor v-html="formatContent(blogInfo)" v-highlight/>
        <!-- <div v-html="formatContent(blogInfo)" v-highlight></div> -->
        <div class="footer-view">
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
  computed: {
    ...mapState("blog", {
      blogInfo: state => state.blogInfo
    })
  },
  mounted() {
    let id = this.$route.params.id;
    this.getBlogInfo(id);
    this.addReadNum(id);
  },
  methods: {
    ...mapActions("blog", {
      getBlogInfo: "getBlogInfo",
      addReadNum: "addReadNum"
    }),
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
    formatContent(content) {
      console.log(content.content);
      return content.content;
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
  // margin-top: 20px;
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
