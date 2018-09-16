<template>
  <div class="item" v-if="user">
    <div class="username">{{user.username}}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {

  name: 'UserItem',

  props: {

    user: {
      type: Object,
      default () {
        return null
      }
    }

  }

}
</script>

<style scoped>
  .item {
    align-items: center;
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    padding: 5px;
    max-width: 240px;
    margin: 5px 0;
    transition: all 1s;
  }

  .item .username {
    padding: 0 16px;
  }
</style>
