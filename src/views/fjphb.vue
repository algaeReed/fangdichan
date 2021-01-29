<template>
  <div class="main">
    <Head/>
    <el-card shadow="always"> <h2>房价排行榜</h2>
    </el-card>
    <House/>
  </div>
</template>

<script>
import House from '../components/house.vue'
import Head from '../views/Head.vue'
export default {
  components: { Head, House },
  
}
</script>