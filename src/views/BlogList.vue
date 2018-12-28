<template>
  <div class="container">
    <Col
      type="flex"
      :xs="{ span: 22}"
      :sm="{ span: 22}"
      :lg="{ span: 14}"
    >
    <div class="animated bounceInLeft list-view">
      <Card
        :bordered="false"
        v-for="(item, index) in blogList"
        :key="index"
      >
        <span
          slot="title"
          class="title-text"
          @click="toBlogInfo(item)"
          style="cursor:pointer"
        >{{item.title}}</span>
        <div>
          {{getTime(item.createAt)}}
          <span class="blog-list-info-text">
            查看：200 评论：1
          </span>
          <div class="tag-view">
            <Tag
              color="default"
              v-for="(tagsItem, index) in item.tags"
              :key="index"
            >{{tagsItem}}</Tag>
          </div>
        </div>
      </Card>
    </div>
    </Col>
  </div>

</template>

<script>
import { mapActions, mapState } from "vuex";
const dateFormat = require("dateformat");
export default {
  data() {
    return {
      key: "value"
    };
  },
  computed: {
    ...mapState("blog", {
      blogList: state => state.blogList,
      hotBlogList: state => state.hotBlogList
    })
  },
  mounted() {
    this.getBlogList();
    this.getHotBlogList();
  },
  methods: {
    ...mapActions("blog", {
      getBlogList: "getBlogList",
      getHotBlogList: "getHotBlogList"
    }),
    limitTitle(content) {
      if (!content) return;
      if (content.length > 22) {
        return content.slice(0, 22) + "...";
      }
      return content;
    },
    changePage() {
      let that = this;
      that.$router.push("/blog-info");
    },
    getTime(time) {
      let date = new Date(time);
      return dateFormat(date, "yyyy-mm-dd HH:MM:ss");
    },
    toBlogInfo(item) {
      this.$router.push({
        name: "blog-info",
        params: { id: item._id }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
}
.list-view {
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
}
.ivu-card {
  width: 33%;
  border-radius: 0;
  border: 1px solid #efefef;
  line-height: 30px;
  margin: 10px;
  .title-text {
    font-size: 20px;
    font-weight: 700;
  }
  .blog-list-info-text {
    margin-left: 20px;
  }
}
@media only screen and (max-width: 750px) {
  .ivu-card {
    width: 100%;
    background-color: aqua;
  }
}
.right-view {
  margin-left: 20px;
}
.tag-view {
  float: right;
}
.right-tag {
  margin: 5px 10px;
}
</style>
