<template>
  <div id="app">
    <!-- <el-button @click="show = !show">Click Me</el-button> -->
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

// <script>
// import Head from './views/Head.vue'
// import Main from './views/Main.vue'
// import Footer from './views/Footer.vue'
export default {
   components: {
    // Head,
    // Main,
    // Footer
  },
  
}
</script>

<style lang="scss">

.main{
  margin: 0 auto;
  width: 1200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
