<template>
  <div class="block">

    <div class="options">
      <Button type="primary" @click="addUser(_randomUser())">添加用户</Button>
      <Button type="error" @click="clearUsers">清空用户</Button>
    </div>

    <transition-group enter-active-class="bounceInLeft"
                      leave-active-class="bounceOutRight"
                      tag="div" class="user-list">
      <UserItem class="animated" v-for="(user, key) in users" :key="key" :user="user">
        <Button type="error" size="small" @click="users.splice(key, 1)">删除</Button>
      </UserItem>
    </transition-group>

    <div class="counter" v-if="users.length > 0">
      <span>共计 {{users.length}} 位人物</span>
    </div>

    <pre>{{$store.state.app}}</pre>

    <Form @submit.native.prevent inline>
      <FormItem>
        <Select v-model="appKey">
          <Option value="">请选择</Option>
          <Option v-for="(keySet, key) in appKeys" :key="key"
                  :value="keySet.name">
            {{keySet.title}}
          </Option>
        </Select>
      </FormItem>
      <FormItem>
        <Input v-model="appValue" ref="value"/>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="setAppItem">添加 App 信息</Button>
      </FormItem>
    </Form>

  </div>
</template>

<script>
import {Form, FormItem, Button, Input, Select, Option} from 'iview'
import {mapGetters} from 'vuex'

export default {

  name: 'VueTestUtil',

  components: {
    Form,
    FormItem,
    Button,
    Input,
    Select,
    Option,
    UserItem: () => import('./UserItem')
  },

  props: {

    name: {
      type: String,
      default: ''
    }

  },

  data () {
    return {
      date: new Date(),
      users: [],
      appKey: '',
      appValue: '',
      appKeys: [
        {
          name: 'title',
          title: '标题'
        },
        {
          name: 'keywords',
          title: '关键字'
        },
        {
          name: 'description',
          title: '描述备注'
        },
        {
          name: 'copyright',
          title: '版权'
        },
        {
          name: 'record',
          title: '备案'
        }
      ]
    }
  },

  computed: {

    ...mapGetters(['app'])

  },

  watch: {

    appKey: function (key) {
      this.appValue = this.app[key] || ''
      this.$refs.value.focus()
    }

  },

  methods: {

    addUser (user) {
      this.users.push(user)
    },

    _randomUser () {
      let users = [
        {username: '赵匡胤'},
        {username: '朱元璋'},
        {username: '爱新觉罗·弘历'},
        {username: '忽必烈'},
        {username: '成吉思汗'},
        {username: '李自成'},
        {username: '赵佶'},
        {username: '李世民'},
        {username: '纪晓岚'},
        {username: '刘墉'},
        {username: '顾恺之'}
      ]
      return users[Math.floor(Math.random() * (users.length - 1))]
    },

    clearUsers () {
      let timer
      let deleteUser = () => {
        if (this.users.length <= 0) {
          timer = clearTimeout(timer)
          return
        }
        this.users.splice(this.users.length - 1)
        timer = setTimeout(() => {
          deleteUser()
        }, 100)
      }
      deleteUser()
    },

    setAppItem () {
      if (!this.appKey || !this.appValue) return alert('请输入关键字')
      this.$store.dispatch('setAppItem', {
        key: this.appKey,
        value: this.appValue
      })
    }

  }

}
</script>

<style scoped>
  .user-list {
    max-width: 100%;
    overflow: hidden;
  }
</style>
