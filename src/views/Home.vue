<template>
<div>
  <Head/>
  <Main/>
  <Footer/>
</div>
  
</template>

<script>
import Head from './Head.vue'
import Main from './Main.vue'
import Footer from './Footer.vue'
export default {
   components: {
    Head,
    Main,
    Footer
  },
  
}
</script>