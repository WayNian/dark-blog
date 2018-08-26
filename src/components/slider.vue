<template>
    <div class="head-view">
        <img :src="url" alt="" srcset="">
        <div>{{name}}</div>
    </div>
</template>

<script>
export default {
    props: ["url", "name"]
};
</script>

<style lang = "scss" scoped>
.head-view {
    width: 100%;
    height: 300px;
    background-color: #00e5ff;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 30px;
    img {
        border-radius: 50%;
        width: 200px;
        height: 200px;
    }
    div {
        margin-top: 20px;
        font-size: 34px;
        color: #fff;
        font-weight: 400;
    }
}
</style>