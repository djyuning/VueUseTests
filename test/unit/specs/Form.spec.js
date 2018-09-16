import Vue from 'vue'
import Form from '@/components/Form'

describe('Form.vue', () => {
  it('组件可正常挂载', () => {
    const Constructor = Vue.extend(Form)
    const vm = new Constructor().$mount()
    expect(vm.$el.className.indexOf('block') !== -1).to.equal(true)
  })

  it('组件输入和表单提交', () => {
    const Constructor = Vue.extend(Form)
    const vm = new Constructor().$mount()

    // 模拟输入
    vm.inputText = 'user'
    vm.inputPassword = '123321'

    // 自定义事件
    const clickEvent = new window.Event('click')
    let $submit = vm.$el.querySelector('button[type="submit"]')

    // 提交表单
    $submit.dispatchEvent(clickEvent)
    expect(vm.resultVisible).to.equal(true)

    // 手动更改
    vm.reset()
    expect(vm.resultVisible).to.equal(false)
    expect(vm.inputText).to.equal('')
    expect(vm.inputPassword).to.equal('')
  })
})
