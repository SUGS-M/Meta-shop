<template>
    <div class="homeswiper">
        <div class="swiperBg" :style="{ backgroundColor: color.bgColor }"></div>

        <a-carousel arrows autoplay :beforeChange="changeFn">
            <template #prevArrow>
            <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
                <left-circle-outlined />
            </div>
            </template>
            <template #nextArrow>
            <div class="custom-slick-arrow" style="right: 10px">
                <right-circle-outlined />
            </div>
            </template>
            
            <div class="swiper-item" v-for="(item, i) in data">
                <div class="swiper-box">
                    <div class="swiper-left">
                        <h3 :style="{ color: item.text_color }">
                        {{ item.desktop_sub_title || item.sub_title }}
                        </h3>
                        <h1 :style="{ color: item.text_color }">
                        {{ item.desktop_title || item.title }}
                        </h1>
                    </div>
                    <div class="banner-right">
                        <img
                        :src="`https://pixl.decathlon.com.cn/${item.picture_desktop}/banner.jpg`"
                        :alt="item.title"
                        />
                    </div>
                </div>
            </div>
            <!-- <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div> -->
        </a-carousel>
    </div>

</template>


<script setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { reactive } from 'vue';

const data = [
    {bgColor: '#E51144', text_color:'white', sub_title:'新年新装备', title:'运动运来', picture_desktop:'s904168'},
    {bgColor: '#2e939a', text_color:'white', sub_title:'儿童冬季装备', title:'成长之旅 如虎添翼', picture_desktop:'s904164'},
    {bgColor: '#d78640', text_color:'white', sub_title:'室内健身装备系列', title:'宅家健身 即刻开练', picture_desktop:'s904166'},
    {bgColor: '#bb0009', text_color:'white', sub_title:'新年精选产品', title:'红红火火过新年', picture_desktop:'s904137'}
    // ['#E51144'], //输出的是['#E51144']，非#E51144
    // ['#2e939a'],
    // ['#d78640'],
    // ['#bb0009']
]
const color = reactive({
    //默认颜色：第一个
    bgColor: data[0].bgColor,
})
function changeFn(from, to) {
    color.bgColor = data[to].bgColor;
    // console.log(to);
    // console.log(colors[to].bgColor)
}
</script>

<style lang="less" scoped>
.swiperBg {
  position: absolute; //脱离文档流，是为了挡住走马灯？？？
//   display: block;
  width: 100%;
  height: 575px;
  background-color: orangered;
  //倾斜,变形原点
  transform-origin: 0 0;
  transform: skew(0, -8deg);
  transition: all 0.5s;
}

.swiper-item {
  height: 575px;
  .swiper-box {
    display: flex;
    min-width: 1200px;
    justify-content: center;
    .swiper-left {
      width: 340px;
      padding-right: 100px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-top: 100px;
      text-align: right;
    }
    h3 {
      font-size: 30px;
      font-weight: 900;
      margin: 0;
      line-height: 40px;
    }
    h1 {
      font-size: 60px;
      font-weight: 900;
      margin: 0;
      line-height: 70px;
    }

    .banner-right {
      margin-top: 45px;
      transform-origin: 0 100%;
      transform: skew(0, -8deg);
      overflow: hidden;
      border-radius: 20px;
      border-bottom-right-radius: 80px;
      img {
        transform-origin: 0 100%;
        transform: skew(0, 8deg);
        border-radius: 20px;
      }
    }
  }
}

/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 575px;
  line-height: 160px;
//   background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
  z-index: 1;
}
.ant-carousel :deep(.custom-slick-arrow:before) {
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {
  opacity: 0.5;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>