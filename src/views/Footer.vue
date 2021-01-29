<template>
  <div>
    
    <div class="wel">
      <el-alert
      title="WELCOME"
      type="warning"
      description="小静找房-致力于更好的为您找到合适的家"
      show-icon>
      </el-alert>
    </div>

    <h5>
      <strong> 免责声明： </strong>
      <span>
        本站楼盘信息旨在为用户提供更多信息的无偿服务，信息以政府部门登记备案为准，请谨慎核查。</span
      >
    </h5>
    <div>
      <span><el-link href="/about" type="info">关于我们</el-link></span>
      <el-divider direction="vertical"></el-divider>
      <span><el-link href="/faq" type="info">FAQ</el-link></span>
    </div>
    <h5>Copyright © 2021 周小静</h5>
  </div>
</template>

<style>

.wel{
  position: absolute;
}
el-alert{
  position: relative;
  margin-bottom: 0;
  display: flex;
  z-index: 1;
}
h3 {
  height: 100px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

</style>