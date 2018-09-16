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
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    UseUI: () => import('@/components/UseUI'),
    Form: () => import('@/components/Form')
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .main {
    margin-bottom: 20px;
  }
</style>
