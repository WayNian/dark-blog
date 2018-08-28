<template>
    <div class="animated bounceInRight">
        <el-card class="box-card" v-for="i in 6" :key="i">
            <div slot="header" class="clearfix">
                <span class="title-text" @click="changePage()">如何优雅的设计和使用缓存？</span>
                <span class="time-text">2018-08-16</span>
                <div class="tag-btn">
                    <el-tag>java</el-tag>
                    <el-tag type="success">Vue</el-tag>
                    <el-tag type="info">Android</el-tag>
                    <el-tag type="warning">JavaScript</el-tag>
                    <el-tag type="danger">node</el-tag>
                </div>
            </div>
            <div>
                {{limitText()}}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            key: "value"
        };
    },
    methods: {
        limitText() {
            let text = `在使用缓存之前，需要确认你的项目是否真的需要缓存。使用缓存会引入的一定的技术复杂度，后文也将会一一介绍这些复杂度。一般来说从两个方面来个是否需要使用缓存:
CPU占用:如果你有某些应用需要消耗大量的cpu去计算，比如正则表达式，如果你使用正则表达式比较频繁，而其又占用了很多CPU的话，那你就应该使用缓存将正则表达式的结果给缓存下来。
数据库IO占用:如果你发现你的数据库连接池比较空闲，那么不应该用缓存。但是如果数据库连接池比较繁忙，甚至经常报出连接不够的报警，那么是时候应该考虑缓存了。笔者曾经有个服务，被很多其他服务调用，其他时间都还好，但是在每天早上10点
`;
            if (text.length > 100) {
                return text.slice(0, 100) + "...";
            }
            return text;
        },
        changePage() {
            let that = this 
            that.$router.push('/blog-info')
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
    .time-text {
        font-size: 18px;
        margin-left: 20px;
    }
    .tag-btn {
        float: right;
        .el-tag {
            margin-right: 10px;
        }
    }
}
</style>