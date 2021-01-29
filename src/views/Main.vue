<template>
    <div class="main left">
        <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-side">
            <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;" class="bg-side">
            </el-radio-group>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-house"></i>
                  <span slot="title">看新房</span>
                </template>
                  
              
                <el-menu-item-group>
                  <el-menu-item index="1-1">
                    <el-link href='/bykp' type="primary">本月开盘</el-link> 
                    </el-menu-item>
                  <el-menu-item index="1-2">
                    <el-link href='/lpdg' type="primary">楼盘导购</el-link> 
                    </el-menu-item>
                  <el-menu-item index="1-3">
                    <el-link href='/fjphb' type="primary">房价排行榜</el-link> 
                    </el-menu-item>
                </el-menu-item-group> 
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-school"></i>
                <span slot="title"><el-link href='/HousePublish' >要卖房</el-link> </span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-office-building"></i>
                <span slot="title"><el-link href='/tenement' >出租房</el-link> </span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title"><el-link href='/about' >关于我们</el-link> </span>
            </el-menu-item>
          </el-menu>

          </div>
        </el-col>

        <el-col :span="18"><div class="grid-content bg-purple">
            <el-carousel :interval="4000" type="card" height="100%">
                 <el-carousel height="580px">
                  <el-carousel-item v-for="item in pics" :key="item.url">
                    <img 
                    style="width: 100%; height: 100%"
                    :src="item.url"/>
                  </el-carousel-item>
                </el-carousel>
            </el-carousel>
        </div></el-col>
        </el-row>
    </div>
</template>
<style lang="scss" scoped>
   .main{
        margin-top: 10px;
    }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .bg-side{
    // background: "../../assets/side.png";
    background: url('@/../../assets/side.png') center no-repeat;
    // height: 300px;
    // width: 400px;
  }
  .grid-content {
    position: relative;
    border-radius: 4px;
    min-height: 580px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
   .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  el-image{
      width: 100px;
      height: 100px;
  }
</style>

<script>
  export default {
    data() {
      return {
      pics: [
        { url: require("../assets/pic1.png") },
        { url: require("../assets/pic2.png") },
        { url: require("../assets/pic3.png") },
        { url: require("../assets/pic4.png") }
      ]
    };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>   