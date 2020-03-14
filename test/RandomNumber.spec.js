import { mount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber.vue'

describe('RandomNumber', () => {
  test('By default rand number 0', () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain('<span>0</span>')
  })
  test('if button is clicked rand number should be between 1,10',  async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNum = parseInt(wrapper.find('span').element.textContent)
    expect(randomNum).toBeGreaterThanOrEqual(1)
    expect(randomNum).toBeLessThanOrEqual(10)
  })
  test('if button is clicked rand number should be between 200,300',  async () => {
    const wrapper = mount(RandomNumber,{
      propsData:{
        minNum:200,
        maxNum:300
      }
    })
    wrapper.find('button').trigger('click')
    await wrapper.vm.$nextTick()
    const randomNum = parseInt(wrapper.find('span').element.textContent)
    expect(randomNum).toBeGreaterThanOrEqual(200)
    expect(randomNum).toBeLessThanOrEqual(300)
  })
})
