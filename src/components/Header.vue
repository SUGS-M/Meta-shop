<template>
    <!-- <a-button type="primary">Primary Button</a-button> -->
    <div class="global">
        <div class="left"> 
            <img src="../assets/vue.svg">
        </div>

        <div class="center">
            <a-input-search
            v-model:value="value"
            placeholder="请输入待查询商品"
            class="input-search"
            @search="onSearch"
            />
        </div>

        <div class="right">
            <a-menu v-model:selectedKeys="current" mode="horizontal">
                <a-menu-item key="help">
                <template #icon>
                    <question-circle-outlined />
                </template>
                帮助
                </a-menu-item>
                <a-menu-item key="shop">
                <template #icon>
                    <shop-outlined />
                </template>
                门店
                </a-menu-item>
                <a-menu-item key="accout">
                <template #icon>
                    <account-book-outlined />
                </template>
                账户
                </a-menu-item>
                <a-menu-item key="buycar">
                <template #icon>
                    <shopping-cart-outlined />
                </template>
                购物车
                </a-menu-item>
            </a-menu>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { QuestionCircleOutlined, ShopOutlined, AccountBookOutlined, ShoppingCartOutlined } from '@ant-design/icons-vue';

const value = ref('');
const current = ref(['help']);
const onSearch = (searchValue) => {
    // console.log('use value', searchValue);
    // console.log('or use this.value', value.value);
};   
</script>


<style lang="less" scoped>
.global {
    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 0 10px #ccc;

    // transition: all 0.5s;

    position: fixed;//顶部固定起来
    top: 0;

    z-index: 1000000;  //重叠时，顶部导航栏会覆盖较小的
    // height: 40px;
    width: 100%;
    background-color: #fff;//有颜色，挡着点底部移动
}
.left {
    margin-right: 20px;
    img {
        margin-left: 20px;
        height: 30px;
    }
}
.center {
  flex: 1;
  height: 40px;
  align-items: center;
  .input-search {
    margin-top: 5px;
  }
}

.right {
    width: 400px;
    // margin-right: 20px;
}
</style>
