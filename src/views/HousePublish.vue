<template>
  <div class="container">
    <Head/>
    <div class="main">
    <el-row :gutter="12">
      <el-col >
        <el-card shadow="always"> <h2>填写房源信息</h2> 
        <div class="info">
         <h5>基本信息</h5>

         <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="小区名称" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入小区名称"></el-input>
          </el-form-item>
        </el-form>

        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="门牌号">
            <el-input v-model="ruleForm.dong" placeholder="请输入楼栋"></el-input>
          </el-form-item>
          <el-form-item label="栋">   
            <el-input v-model="ruleForm.dy" placeholder="请输入单元"></el-input> 
          </el-form-item>
          <el-form-item label="单元">   
            <el-input v-model="ruleForm.s" placeholder="-室"></el-input> 
          </el-form-item>
          <el-form-item label="室"> </el-form-item>
        </el-form>
        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="户型">
            <el-input v-model="ruleForm.shi" placeholder="请输入楼栋"></el-input>
          </el-form-item>
          <el-form-item label="室">   
            <el-input v-model="ruleForm.ting" placeholder="请输入单元"></el-input> 
          </el-form-item>
          <el-form-item label="厅">   
            <el-input v-model="ruleForm.wei" placeholder="-室"></el-input> 
          </el-form-item>
          <el-form-item label="卫"> </el-form-item>
        </el-form>

         <el-form  :inline="true"  class="demo-ruleForm">
          <el-form-item label="建筑面积" prop="name">
            <el-input v-model="ruleForm.pingfang" placeholder="请输入建筑面积"></el-input>
          </el-form-item>
          <el-form-item label="平方米" prop="name">
          </el-form-item>
        </el-form>

        <el-form :inline="true"  class="demo-form-inline">
          <el-form-item label="楼层">
            <el-input v-model="ruleForm.shi" placeholder="第几层·"></el-input>
          </el-form-item>
          <el-form-item label="层">   
            <el-input v-model="ruleForm.ting" placeholder="共几层"></el-input> 
          </el-form-item>
          <el-form-item label="层">   
          </el-form-item>
        </el-form>

        <el-form :inline="true"  class="demo-form-inline">
            
         <el-form-item label="朝向">
    <el-select v-model="form.region" placeholder="请选择房间朝向">
      <el-option label="东" value="a"></el-option>
      <el-option label="南" value="b"></el-option>
      <el-option label="西" value="c"></el-option>
      <el-option label="北" value="d"></el-option>
      <el-option label="东南" value="e"></el-option>
      <el-option label="东北" value="f"></el-option>
      <el-option label="西南" value="g"></el-option>
      <el-option label="西北" value="h"></el-option>
    </el-select>
     </el-form-item>
        </el-form>

        <h5>期望价格</h5>
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="价格" prop="name">
            <el-input v-model="form.name" placeholder="请输入房源希望售卖的价格"> </el-input>
          </el-form-item>
        </el-form>
        <h5>联系方式</h5>
        <el-form :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="手机号" prop="name">
            <el-input v-model="form.name" placeholder="请输入可以联系到您的手机号码"> </el-input>
          </el-form-item>
        </el-form>

         <el-checkbox 
                v-model="checked"
                class="rememberme"
          ><el-button @click="ServiceInfo" type="text">服务协议</el-button></el-checkbox>

          
          <el-button @click="submit" >  <el-link  type="primary">提交</el-link> </el-button>

          <p>
            <el-link :underline="false" type="danger">*提交房源信息经后台人工审核成功通过即可显示在出售页面,并通过短信方式通知您。</el-link> 
          </p> 
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
  },
   data() {
      return {
        form: {
          name: ''
          },
        ruleForm: {
          pingfang:'',
          shi:'',
          ting:'',
          wei:'',
          dong:'',
          dy:'',
          s:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        
      };},
      methods: {
         ServiceInfo(){
            this.$router.push({path: '/ServiceInfo'});
        },
        submit(){
          setTimeout(() => {
            this.$router.push({path: '/'});
            this.$alert('信息提交成功，返回网站首页', '提示', {confirmButtonText: '确定',});
          }, 300);
        }
      },
}
</script>

