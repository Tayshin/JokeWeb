<template>
  <div id="app">
    <router-view></router-view>
    <footer-tab></footer-tab>

  </div>
</template>

<script>
import FooterTab from './components/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome'
    }
  },
  components:{
    FooterTab
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
}
</style>
