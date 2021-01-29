<template>
  <div class="container">
    <Head/>
    <div class="main">
    <el-row :gutter="12">
      <el-col >
        <el-card shadow="always"> <h2>About 小静找房</h2> 
        <div class="info">
          <h4>"小静找房" 是房地产家居行业专业网络平台，一直专注新房、二手房、租房、家居、房地产研究等领域的互联网创新，在房地产互联网移动及PC均处于行业前列。</h4>
          <h5>平台信条</h5>
          <blockquote>业绩优先，数字说话</blockquote>
           <h5>平台理念</h5>
          <blockquote>行胜于言，永远追梦</blockquote>
          <h5>行动准则</h5>
          <blockquote>NEVER GIVE UP</blockquote>

        </div>
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
  }
  h5{
      font-size: 10px;
      color: #cac6c6;
    }
  hr{
      border: 1px dashed gainsboro;
      width: 80%;
    
  }
}
</style>

<script>
import Head from './Head.vue'
export default {
  components: {
    Head
  }
}
</script>

