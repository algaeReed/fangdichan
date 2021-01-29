

<template>
  <div class="main">
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-bg">
        <div class="nav">
          <img src="../assets/php.png" onclick="javascript:location.href='/'"  alt="">
          <!-- <span ></span>  -->
          <el-link onclick="javascript:location.href='/'" type="primary" :underline="false">XIAOJINGZHAOFANG</el-link>
        </div>
          
      </div></el-col>
      <el-col :span="6"><div class="grid-content bg-bg"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-bg"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-bg">
        <el-row  type="flex" justify="center" align="middle">
          <el-button  >  <el-link href="/reg"  type="primary">注册</el-link> </el-button>
          <el-button  >  <el-link href="/login"  type="primary">登录</el-link> </el-button>
        </el-row>
      </div></el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
  .main{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
  }
  .nav {
    img{
      width: 64px;
      height: 64px;
      vertical-align:middle;
    }
    .el-link{
      font-size: 20px;
      font-family: "MS P明朝", "MS PMincho", HGS明朝E, "MS Mincho", serif;
;
    }
  } 

  .el-row {
    height: 72px;
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
  .grid-content {
    border-radius: 4px;
    min-height: 72px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
