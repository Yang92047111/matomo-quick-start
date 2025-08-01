import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../src/components/Home.vue'

// Mock the matomo plugin
vi.mock('../src/plugins/matomo', () => ({
  trackEvent: vi.fn(),
  trackGoal: vi.fn()
}))

// Create a mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: {} }
  ]
})

describe('Home.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Matomo Vue3 Integration Demo')
    expect(wrapper.text()).toContain('Welcome to the Matomo analytics integration example!')
  })

  it('has demo buttons', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    const buttons = wrapper.findAll('.demo-button')
    expect(buttons).toHaveLength(2)
    expect(buttons[0].text()).toBe('📊 Track Custom Event')
    expect(buttons[1].text()).toBe('🎯 Track Goal')
  })

  it('shows tracking information', () => {
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('What\'s being tracked:')
    expect(wrapper.text()).toContain('Page Views')
    expect(wrapper.text()).toContain('Custom Events')
  })
})