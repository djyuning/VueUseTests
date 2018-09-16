import {
  mount
} from '@vue/test-utils'
import UseUI from '@/components/UseUI'

describe('UseUI.vue', () => {
  it('该组件使用了第三方的组件', () => {
    // 组件可正常挂载
    const wrapper = mount(UseUI)
    expect(wrapper.isVueInstance()).to.equal(true)

    // 第三方组件可正常解析
    const button = wrapper.find('.ivu-btn')
    expect(button.is('.ivu-btn')).to.equal(true)
  })
})
