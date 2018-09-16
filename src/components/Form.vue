<template>
  <div class="block">

    <form action="" methods="get" @submit.stop.prevent>
      <input type="text" v-model="inputText" placeholder="文本"/>
      <input type="password" v-model="inputPassword" placeholder="密码"/>
      <button type="submit" @click="submit">提交</button>
      <button type="reset" @click="reset">取消</button>
    </form>

    <div class="result" v-show="resultVisible">{{inputText}} - {{inputPassword}}</div>

  </div>
</template>

<script>
export default {
  name: 'Form',

  data () {
    return {
      inputText: '',
      inputPassword: '',
      resultVisible: false
    }
  },

  methods: {

    submit () {
      this.resultVisible = true
    },

    reset () {
      this.resultVisible = false
      this.inputText = ''
      this.inputPassword = ''
    }

  }
}
</script>

<style scoped>

  form {
    display: flex;
    padding: 10px;
  }

  input, button {
    outline: none;
    border-radius: 3px;
    margin: 5px;
    transition: all .3s ease;
  }

  input {
    background-color: white;
    border: 1px #ddd solid;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .05);
    line-height: 32px;
    padding: 0 8px;
  }

  input:focus {
    border-color: #f90;
  }

  button {
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    height: 34px;
    padding: 0 16px;
  }

  button[type="submit"] {
    background-color: #88cb3f;
    color: white;
  }

  button[type="submit"]:hover, button[type="submit"]:focus {
    background-color: #72cb3e;
    box-shadow: 0 3px 8px rgba(114, 203, 62, 0.3);
  }

  button[type="submit"]:active {
    background-color: #4b9c38;
  }

  button[type="reset"] {
    background-color: transparent;
    color: #888;
  }

</style>
