<template>
    <div class="container">
        <div class="animated bounceInLeft list-view">
            <Card :bordered="false">
                <p slot="title">No border title</p>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537178880093&di=144d86460d6a9e0ee06b1cac0dc333b5&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4034970a304e251facb1a0d4aa86c9177f3e5353.jpg" alt="">
                <article>
                    {{limitArticle()}}
                </article>
            </Card>

            <Card :bordered="false">
                <p slot="title">No border title</p>
                <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
            </Card>
        </div>
        <div class="right-view animated bounceInRight">
            <Card title="导航" icon="md-list-box" :padding="0" shadow style="width: 300px;">
            <CellGroup>
                <Cell title="Only show titles" />
                <Cell title="Display label content" label="label content" />
                <Cell title="Display right content" extra="details" />
                <Cell title="Link" extra="details" to="/components/button" />
                <Cell title="Open link in new window" to="/components/button" target="_blank" />
                <Cell title="Disabled" disabled />
                <Cell title="Selected" selected />
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch slot="extra" />
                </Cell>
            </CellGroup>
        </Card>
        </div>
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
        },
        limitArticle() {
            let text = `作者：林鑫
链接：https://zhuanlan.zhihu.com/p/44391951
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

自定义图标element-ui 自带的字体图标比较少，而且许多比较常见的都没有，因此需要自己引入自己想要的字体图标。最受欢迎的图标库 Font Awesome，足足有 675 个图标，但也因此导致字体文件比较大，而项目中又不需要用到这么多图标。那么这时候，阿里图标库就是一个非常不错的选择。首先在阿里图标上创建一个项目，设置图标前缀，比如 el-icon-lx，设置Font Family，比如 lx-iconfont，添加需要用到的图标到项目中，我这边选择 Font class 生成在线链接，因为所有页面都需要用到图标，就直接在 index.html 中引入该css链接就行了<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>vue-manage-system</title>
    <!-- 这里引入阿里图标样式 -->
    <link rel="stylesheet" href="//at.alicdn.com/t/font_830376_qzecyukz0s.css">
</head>
<body>
<div id="app"></div>
</body>
</html>
然后需要设置前缀为 el-icon-lx 的图标类名使用 lx-iconfont 字体。[class*="el-icon-lx"], [class^=el-icon-lx] {
    font-family: lx-iconfont!important;
}
但是这个样式要放在哪里才可以呢？这可不是随便放就行的。在 main.js 中，引入了 element-ui 的样式，而样式中有这样的一段css:[class*=" el-icon-"], [class^=el-icon-]{
    font-family: element-icons!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
很明显，如果这段 css 在我们自定义样式后面才执行，就会覆盖了我们的样式，那自定义的图标就显示不了。而在 build 项目的时候，会把 APP.vue 中的的样式打包进 app.css 中，然后再把 main.js 中引用到的样式追加到后面。那么我们可以把自定义样式放到一个css文件中，然后在 main.js 引入 element-ui css 的后面引入，那就可以覆盖掉默认字体了，然后便可以在项目中通过 <i class="el-icon-lx-people"></i> 使用图标了。那机智的人就发现了，我自定义图标的前缀不要含 el-icon- 就不会有这样的问题了。是的，那么为了和原有字体保持一样的样式，需要复制它的整段css/* 假设前缀为 el-lx */
[class*="el-lx-"], [class^=el-lx-]{
    font-family: lx-iconfont!important;
    speak: none;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    vertical-align: baseline;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
导航菜单element-ui 关于导航菜单的文档也是非常详细了，但是还是有人提 issue 或者加 QQ 问我：三级菜单怎么弄等等。而且具体的菜单项可能是服务器端根据权限而返回特定的数据项，因此不能写死在模板中。首先定好菜单数据的格式如下，即使服务器端返回的格式不是这样，也需要前端处理成下面的格式：export default {
    data() {
        return {
            items: [{
                icon: 'el-icon-lx-home',
                index: 'dashboard',
                title: '系统首页'
            },{
                icon: 'el-icon-lx-calendar',
                index: '1',
                title: '表单相关',
                subs: [{
                    index: '1-1',
                    title: '三级菜单',
                    subs: [{
                        index: 'editor',
                        title: '富文本编辑器'
                    }]
                }]
            },{
                icon: 'el-icon-lx-warn',
                index: '2',
                title: '错误处理',
                subs: [{
                    index: '404',
                    title: '404页面'
                }]
            }]
        }
    }
}
icon 就是菜单图标，就可以用到我们上面自定义的图标了；index 就是路由地址；title 就是菜单名称；subs 就是子菜单了。而模板则通过判断菜单中是否包含 subs 从而显示二级菜单和三级菜单。`
            if(text.length > 700) {
                return text.slice(0, 700) + '...'
            }
            return text
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
    img {
        float: left;
        width: 250px;
        margin-right: 10px;
        // height: 100px;
    }
}
.right-view {
    margin-left: 20px; 
}
</style>