import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Home from '../src/components/Home.vue'

// Mock the matomo plugin
vi.mock('../src/plugins/matomo', () => ({
  trackEvent: vi.fn(),
  trackGoal: vi.fn()
}))

describe('Home.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('Matomo Vue3 Integration Demo')
    expect(wrapper.text()).toContain('Welcome to the Matomo analytics integration example!')
  })

  it('has demo buttons', () => {
    const wrapper = mount(Home)
    const buttons = wrapper.findAll('.demo-button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('Track Custom Event')
    expect(buttons[1].text()).toBe('Track Goal')
  })

  it('shows tracking information', () => {
    const wrapper = mount(Home)
    expect(wrapper.text()).toContain('What\'s being tracked:')
    expect(wrapper.text()).toContain('Page views (automatic)')
    expect(wrapper.text()).toContain('Custom events (button clicks)')
  })
})