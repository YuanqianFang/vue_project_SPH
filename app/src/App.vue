<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer v-show="$route.meta.show" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted(){
    //派发action 放到APP组件中 对于表内数据只需要请求一次 提高性能
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
