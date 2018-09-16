import {
  createLocalVue,
  mount
} from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '@/App'
import HelloWorld from '@/components/HelloWorld'

const localVue = createLocalVue()
localVue.use(VueRouter)

describe('App.vue', () => {
  it('组件可正常挂载', () => {
    const wrapper = mount(App, {
      localVue,
      router: new VueRouter({
        routes: [
          { path: '/', component: HelloWorld }
        ]
      })
    })
    expect(wrapper.isVueInstance()).to.equal(true)
  })
})
