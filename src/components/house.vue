<template>
  <div class="container">
    
    <div class="main">
    <el-row :gutter="12">
      <el-col >
        <el-card shadow="always">  
          <div class="info">
            <h4>本地合租房</h4>
            <p> <span>区域: </span> <el-link  v-for="item in items.a" :key="item.a">{{ item  }}  </el-link>   </p>
            <p> <span>租金: </span> <el-link  v-for="item in items.b" :key="item.a">{{ item  }}  </el-link>   </p>
            <p> <span>户型: </span> <el-link  v-for="item in items.c" :key="item.a">{{ item  }}  </el-link>   </p>
            <p> <span>方式: </span>  <el-link  v-for="item in items.d" :key="item.a">{{ item  }}  </el-link>   </p>
            <p> <span>朝向: </span> <el-link  v-for="item in items.e" :key="item.a">{{ item  }}  </el-link>   </p>
            <hr>
          </div>
        </el-card>

        <el-card>
        
        <div class="house" v-for="(item, index) in list" :key="index">
          <div class="houseInfo">
            
            <img style="width: 220px; height: 166px" :src="item.url" alt="">
            <div class="xiangxi" >
              <p> <el-link  >{{ item.title  }}  </el-link>   </p>
              <p> <el-link  >{{ item.container  }}  </el-link>   </p>
              <p> <el-link  >{{ item.address  }}  </el-link>   </p>
              <p> <el-link  >{{ item.tag  }}  </el-link>   </p>
              <p> <el-link  >{{ item.sale  }}  </el-link>   </p>
              <!-- <span> <el-button>详情 >>></el-button> </span> -->
              <span> 详情>>></span>
            </div>
            <hr>
          </div>
          </div>
          <!-- <el-carousel :interval="4000" type="card" height="100%">
                 <el-carousel height="580px">
                  <el-carousel-item v-for="item in pics" :key="item.url">
                    <img 
                    style="width: 100%; height: 100%"
                    :src="item.url"/>
                  </el-carousel-item>
                </el-carousel>
            </el-carousel> -->
        </el-card>
      </el-col>
      
    </el-row>
    <hr>
    <h5>Copyright © 2021 周小静</h5>
  </div>
  
  </div>
</template>

<style lang='scss' scoped>
.main{
  padding-top: 10px;
  .info{
    text-align: left;
    font-size: 12px;
    font-family: "Microsoft Yahei UI", "Microsoft Yahei" !important;
    span{
      color: #409eff;
    }
  }
    
  hr{
    border: 1px dashed gainsboro;
    width: 80%;
  }
}

.houseInfo{
  background-color: snow
}
.houseInfo img{

  // width: 100px;
    margin-top: 26px;
  margin-left: -16%;
}
.xiangxi{
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    border-radius: 2px;
    width: 500px;
    height: 230px;
    float: right;
    padding-left: 200px;
    margin-bottom: 30px;
    p{
      text-align: left;
    }
    span{
      float: right;
      margin-right: 100px;
      background: #409eff;
      display: block;
      width: 90px;
      height: 28px;
      font-size: 12px;
      line-height: 28px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
     
    }
     span:hover{
      cursor: pointer;
      box-shadow: 0 6px 8px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
      }  
  } 
  img:hover, .xiangxi:hover{
box-shadow: 0 0 0 1px rgba(16,22,26,.1), 0 1px 1px rgba(16,22,26,.2), 0 2px 6px rgba(16,22,26,.2);
  }
</style>

<script>
export default {
  data() {
    return {
      list: [
        { 
         title:'急租 西稍门 开元商城 机场大巴 上城小区 经典复式 采光好',
         url: require("../assets/pic1.png"),
         container:'整租|2室1厅|39㎡|朝南',
         address: '莲湖-西稍门-上城LOFT',
         tag:'小户型 家电齐全',
         sale:'1600/月',
        },
        { 
         title:'急租    近地铁口 精装1室全配 拎包入住 1700  包含暖气费',
         url: require("../assets/pic2.png"),
         container:'整租|1室1厅|38㎡|朝南',
         address: '距3号线延平门站约793米。',
         tag:'拎包入住精装修低价出租'
        },
        { 
         title:'急租 西稍门 开元商城 机场大巴 上城小区 经典复式 采光好',
         url: require("../assets/pic1.png"),
         container:'整租|2室1厅|39㎡|朝南',
         address: '莲湖-西稍门-上城LOFT',
         tag:'小户型 家电齐全'
        },
        { 
         title:'急租 西稍门 开元商城 机场大巴 上城小区 经典复式 采光好',
         url: require("../assets/pic1.png"),
         container:'整租|2室1厅|39㎡|朝南',
         address: '莲湖-西稍门-上城LOFT',
         tag:'小户型 家电齐全'
        },
        { 
         title:'急租 西稍门 开元商城 机场大巴 上城小区 经典复式 采光好',
         url: require("../assets/pic1.png"),
         container:'整租|2室1厅|39㎡|朝南',
         address: '莲湖-西稍门-上城LOFT',
         tag:'小户型 家电齐全',
         sale:'1600/月',
        },
        { 
         title:'急租    近地铁口 精装1室全配 拎包入住 1700  包含暖气费',
         url: require("../assets/pic2.png"),
         container:'整租|1室1厅|38㎡|朝南',
         address: '距3号线延平门站约793米。',
         tag:'拎包入住精装修低价出租'
        },
        { 
         title:'急租 西稍门 开元商城 机场大巴 上城小区 经典复式 采光好',
         url: require("../assets/pic1.png"),
         container:'整租|2室1厅|39㎡|朝南',
         address: '莲湖-西稍门-上城LOFT',
         tag:'小户型 家电齐全'
        },
        { 
         title:'急租 西稍门 开元商城 机场大巴 上城小区 经典复式 采光好',
         url: require("../assets/pic1.png"),
         container:'整租|2室1厅|39㎡|朝南',
         address: '莲湖-西稍门-上城LOFT',
         tag:'小户型 家电齐全'
        }
        
      ],
       items:{
         a: ['雁塔\u3000','碑林\u3000','莲湖\u3000','未央\u3000','新城\u3000','长安\u3000','灞桥\u3000','高新\u3000','曲江\u3000','新区\u3000','浐灞\u3000','经开\u3000','航天新城\u3000','西咸新区\u3000','咸阳\u3000','鄠邑\u3000','高陵\u3000','临潼\u3000','阎良\u3000','蓝田\u3000','周至\u3000','西安周边'],
         b:['500元以下\u3000','500-1000元\u3000','1000-2000元\u3000','2000-3000元\u3000','3000-5000元\u3000','5000-8000元\u3000','8000元以上'],
         c:['一居\u3000','二居\u3000','三居\u3000','四居\u3000','四居以上'],
         d:['整租\u3000','合租'],
         e:['南北\u3000','通透\u3000','东西\u3000','向\u3000','朝南\u3000','朝北\u3000','朝东\u3000','朝西'],
       },
    }
  },
}
</script>

