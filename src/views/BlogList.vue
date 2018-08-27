<template>
    <div class="animated bounceInRight">
        <el-card class="box-card" v-for="i in 6" :key="i">
            <div slot="header" class="clearfix">
                <span>卡片名称</span>
                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
            </div>
            <div v-for="o in 2" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div>
        </el-card>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
    width: 100%;
    margin-top: 20px;
}
</style>