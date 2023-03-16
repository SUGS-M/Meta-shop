<template>
    <div class="global" id="product">

      <div class="left" >
        <h1><sketch-outlined />商品推荐</h1>
        <div class="products" >
          <div class="prod-item" 
          v-for="(item,pI) in products" 
          :class="{ active: pI == data.pIndex }"
          @click="changeModel(item,pI)">
            <div class="prod-title">
              {{ item.title }}
            </div>
            <div class="img">
               <img :src="item.imgsrc" :alt="item.title">
            </div>
            <a-button type="primary" block >
              <template #icon>
                <ShoppingCartOutlined></ShoppingCartOutlined>
              </template>
              加入购物车
            </a-button>      
          </div>
        </div>   
      </div>

      <div class="right">
        <h3><reload-outlined /> 切换场景</h3>
          <div class="scenes">
            <div class="scene-item" 
            v-for="(scene, index) in scenes"  
            @click="changeHdr(scene, index)"
            >
              <img :src="`./files/hdr/${scene.hdr}.jpg`" />
            </div>
          </div>
      </div> 

    </div>
</template>

<script setup>
import {SketchOutlined, ReloadOutlined, ShoppingCartOutlined} from '@ant-design/icons-vue';
import {reactive, onMounted} from 'vue'
import Base3d from '../Base3d.js';

const products = [
  {title:'GUCCI 古驰新款女包',imgsrc:'./imgs/bag.png', modelName:"bag2.glb"},
  {title:'Macbook Pro',imgsrc:'./imgs/macpro.jpg', modelName:"Macbookpro2.glb"},
  {title:'水晶凉鞋女细跟',imgsrc:'./imgs/womenshoes.jpg', modelName:"shoes.glb"},
]
const scenes = [
  {hdr:"000"},
  {hdr:"080"},
  {hdr:"079"},
  {hdr:"077"},
  {hdr:"076"},
  {hdr:"067"}
]
const data = reactive({
  base3d: {},

  products: [],
  isLoading: true,
  scenes: [],
  pIndex: 0,
  sceneIndex: 0,
  // descIndex: 0,
  // progress: 0,
});
onMounted(() => {
  data.base3d = new Base3d("#product");
});

function changeModel(item, pI) {
  data.pIndex = pI;
  data.base3d.setModel(item.modelName)
  // console.log(data.pIndex)
}
function changeHdr(scene, index) {
  data.sceneIndex = index;
  data.base3d.setEnvMap(scene.hdr);
}

</script>

<style lang="less" scoped>
// .global {
//     //已经左右固定定位了，没必要圣杯了吧
//     display: flex;
//     justify-content: space-between;
//     align-content: center;
// }


// .left {
//     width: 300px;
//     height: 100vh;
//     padding: 60px 0 0;
//     z-index: 100000;
//     position: fixed;
//     left: 0;
//     top: 0;
//     background-color: pink;
//     h1 {
//       font-size: 20px;
//       font-weight: 900;
//       padding: 10px 25px 0;
//     }
//     // .product {
//     //   display: flex;
//     //   flex-direction: column;
//     //   justify-content: center;
//     //   align-items: center;
//     //   .product-item {
//     //     display: flex;
//     //     flex-direction: column;
//     //     justify-content: center;
//     //     // justify-content: space-between;
//     //     align-items: center;
//     //     width: 250px;
//     //     background-color: #fff;
//     //     border-radius: 20px;
//     //     overflow: hidden;
//     //     margin: 10px 0;
//     //     box-shadow: 2px 2px 5px #666;
//     //     transition: all 0.3s;
//     //     // &.active {
//     //     //   box-shadow: 2px 2px 5px #666, 0px 0px 10px red;
//     //     // }
//     //     &:hover {
//     //       transform: translate(0px, -5px);
//     //       // box-shadow: 2px 2px 5px #666, 0px 0px 10px orangered;
//     //       background-color: orange;
//     //     }
//     //     // img {
//     //     //   width: 190px;
//     //     // }
//     //     // .product-item-title {
//     //     //   padding: 0 200px;
//     //     // }
  
//     //   }
//     // }
// }

.left {
  width: 300px;
  height: 100vh;
  padding: 60px 0 0;
  position: fixed;
  z-index: 100000;
  transition: all 0.5s;
  background-color: pink;
  left: 0;
  top: 0;
  h1 {
    font-size: 20px;
    font-weight: 900;
    padding: 10px 25px 0;
  }
  width: 300px;
  .products {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .prod-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 250px;
      background-color: #fff;
      border-radius: 20px;
      overflow: hidden;
      margin: 10px 0;
      box-shadow: 2px 2px 5px #666;
      transition: all 0.3s;
      &.active {
        box-shadow: 2px 2px 5px #666, 0px 0px 10px red;
      }
      &:hover {
        transform: translate(0px, -5px);
        box-shadow: 2px 2px 5px #666, 0px 0px 10px orangered;
        // background-color: orange;
      }
      img {
        width: 190px;
      }
      .prod-title {
        padding: 0 20px;
      }
    }
  }
}
  

// .right {
//     width: 300px;
//     height: 100vh;
//     padding: 60px 0 0;
//     z-index: 100000;
//     position: fixed;
//     right: 0;
//     top: 0;
//     background-color: pink;
//     h1 {
//     font-size: 20px;
//     font-weight: 900;
//     padding: 10px 25px 0;
//   }
//   .scenes {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//   }
// }

.right {
  width: 300px;
  height: 100vh;
  padding: 60px 0 0;
  position: fixed;
  z-index: 100000;
  transition: all 0.5s;
  background-color: pink;
  right: 0;
  top: 0;
  h3 {
    font-size: 20px;
    font-weight: 900;
    padding: 0 30px;
  }
  .scenes {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .scene-item {
    padding: 6px 0;

    img {
      width: 250px;
      border-radius: 10px;
      box-shadow: 2px 2px 10px #666;
      transition: all 0.3s;
      &.active {
        box-shadow: 2px 2px 5px #666, 0px 0px 10px red;
      }
      &:hover {
        transform: translate(0px, -5px);
        box-shadow: 2px 2px 5px #666, 0px 0px 10px orangered;
      }
    }
  }
}

</style>