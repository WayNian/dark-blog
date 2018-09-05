<template>
    <div class="animated bounceInRight">
        <el-card class="box-card" v-for="(item, index) in blogList" :key="index">
            <div slot="header" class="clearfix">
                <div class="title-text" @click="changePage()">{{item.title}}</div>
                <div class="blog-list-info">
                    <span class="time-text">{{new Date(item.createAt).toLocaleString()}}</span>
                    <div class="tag-btn">
                        <el-tag>java</el-tag>
                        <el-tag type="success">Vue</el-tag>
                        <el-tag type="info">Android</el-tag>
                        <el-tag type="warning">JavaScript</el-tag>
                        <el-tag type="danger">node</el-tag>
                    </div>
                </div>

            </div>
            <div>
                {{limitText(item.content)}}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            key: "value",
            blogList: []
        };
    },
    mounted() {
        this.getBlogList();
    },
    methods: {
        limitText(content) {
            if (content.length > 100) {
                return content.slice(0, 100) + "...";
            }
            return content;
        },
        changePage() {
            let that = this;
            that.$router.push("/blog-info");
        },
        getBlogList() {
            let that = this;
            that.$http
                .post("blog/list", {})
                .then(res => {
                    that.blogList = res.data.blogList;
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
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

.box-card {
    width: 80%;
    margin-bottom: 20px;
    .title-text {
        font-size: 24px;
        cursor: pointer;
        &:hover {
            color: #4db6ac;
        }
    }
    .blog-list-info {
        margin-top: 5px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .time-text {
        font-size: 18px;
    }
    .tag-btn {
        .el-tag {
            margin-right: 10px;
        }
    }
}
</style>