<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view class="main"/>
    <div class="section">
      <UseUI></UseUI>
    </div>
    <div class="section">
      <Form></Form>
    </div>
    <div class="section">
      <VueTestUtil></VueTestUtil>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    UseUI: () => import('@/components/UseUI'),
    Form: () => import('@/components/Form'),
    VueTestUtil: () => import('@/components/VueTestUtil')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 60px 40px;
  }

  .main {
    margin-bottom: 20px;
  }
</style>
