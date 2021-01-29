<template>
  <div class="container">
    <Head/>
    <div class="main">
    <el-row :gutter="12">
      <el-col >
        <el-card shadow="always"> <h2>小静找房服务协议</h2> 
        <div class="info">
         <h5>小静找房 的主题是什么？</h5>
         <p>小静找房 是房地产家居行业专业网络平台，一直专注新房、二手房、租房、家居、房地产研究等领域的互联网创新，在房地产互联网移动及PC均处于行业前列。</p>
         <hr>
         <h5>如何联系 小静找房 团队？</h5>
         <p>如果你发现了网站的问题，或是你的账号遇到了难以解决的问题，请发送邮件到 support@qq.com 与我们取得联系。我们会尽可能在 24 小时内回复邮件。</p>
         <hr>
         <h5>小静找房 是用什么做的？</h5>
         <p>小静找房 目前大部分代码是由 VUE + Element UI 写的。</p>
         <hr>
         <h5>访问 小静找房 的最快方式是？</h5>
         <p>小静找房 使用了全球 CDN 对网站的动态和静态资源的访问都进行了优化。因此，为了让 CDN 能够对你的网络进行最准确的判断，请不要自己修改非 ISP 的 DNS 或是使用任何代理软件访问。如果你在中国大陆，请不要使用 Google Public DNS（8.8.8.8），OpenDNS（208.67.222.222）等海外的 DNS 服务器访问 小静找房。</p>
         <!-- <hr>   -->

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

