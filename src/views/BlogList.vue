<template>
    <div class="container">
        <div class="animated bounceInLeft list-view">
            <Card :bordered="false" v-for="(item, index) in blogList" :key="index">
                <span slot="title" class="title-text" @click="toBlogInfo(item)" style="cursor:pointer">{{item.title}}</span>
                <div>
                    <!-- <div class="time-viewß"> -->
                    {{getTime(item.createAt)}}
                    <span class="blog-list-info-text">
                        查看：200  评论：1
                    </span>
                    <!-- </div> -->
                    <div class="tag-view">
                        <Tag color="default">default</Tag>
                        <Tag color="primary">primary</Tag>
                        <Tag color="success">success</Tag>
                        <Tag color="error">error</Tag>
                        <Tag color="warning">warning</Tag>
                    </div>
                </div>

            </Card>
        </div>
        <div class="right-view animated bounceInRight">
            <Card title="热门文章" icon="md-list-box" :padding="0" shadow style="width: 340px;">
                <CellGroup v-for="(item, index) in hotBlogList" :key="index">
                    <Cell  :title="limitTitle(item.title)" to="/components/badge">
                    </Cell>
                </CellGroup>
            </Card>
            <Card title="导航" icon="md-list-box" :padding="0" shadow style="width: 340px; height: 400px;">
                <Tag color="red" class="right-tag">red</Tag>
                <Tag color="volcano" class="right-tag">volcano</Tag>
                <Tag color="orange" class="right-tag">orange</Tag>
                <Tag color="gold" class="right-tag">gold</Tag>
                <Tag color="yellow" class="right-tag">yellow</Tag>
                <Tag color="lime" class="right-tag">lime</Tag>
                <Tag color="green" class="right-tag">green</Tag>
                <Tag color="cyan" class="right-tag">cyan</Tag>
                <Tag color="blue" class="right-tag">blue</Tag>
                <Tag color="geekblue" class="right-tag">geekblue</Tag>
                <Tag color="purple" class="right-tag">purple</Tag>
            </Card>
        </div>
    </div>

</template>

<script>
import { mapActions, mapState } from "vuex";
const dateFormat = require("dateformat");
export default {
  data() {
    return {
      key: "value",
    };
  },
  computed: {
    ...mapState("blog",{
      blogList: state => state.blogList,
      hotBlogList: state => state.hotBlogList,
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
        params: { uuid: item.uuid }
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
  width: 60%;
  align-items: center;
  flex-direction: column;
}
.ivu-card {
  width: 100%;
  border-radius: 0;
  border: 1px solid #efefef;
  line-height: 30px;
  margin-bottom: 20px;
  .title-text {
    font-size: 20px;
    font-weight: 700;
  }
  .blog-list-info-text {
    margin-left: 20px;
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
