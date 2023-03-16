<template>
    <div class="homeswiper">
        <!-- 走马灯子组件 -->
        <HomeSwiper></HomeSwiper>
        <a-button type="primary" @click="router.push('/product')">立即享受生活</a-button>
    </div>
    

</template>

<script setup>
import HomeSwiper from './HomeSwiper.vue';
import {useRouter} from 'vue-router'
const router= useRouter();



</script>

<style lang="less" scoped>
.homeswiper {
    margin-top: 46px;
    // height: 575px;
    // position: relative;
}
</style>