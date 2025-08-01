import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import About from '../src/components/About.vue'

// Mock the matomo plugin
vi.mock('../src/plugins/matomo', () => ({
  trackEvent: vi.fn()
}))

// Create a mock router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: {} },
    { path: '/about', component: About }
  ]
})

describe('About.vue', () => {
  it('renders properly', () => {
    const wrapper = mount(About, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('About This Demo')
    expect(wrapper.text()).toContain('Matomo Vue3 Integration')
  })

  it('shows features list', () => {
    const wrapper = mount(About, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Features Demonstrated:')
    expect(wrapper.text()).toContain('Automatic page view tracking')
    expect(wrapper.text()).toContain('Custom event tracking')
  })

  it('shows tech stack', () => {
    const wrapper = mount(About, {
      global: {
        plugins: [router]
      }
    })
    expect(wrapper.text()).toContain('Tech Stack:')
    expect(wrapper.text()).toContain('Vue 3 with Composition API')
    expect(wrapper.text()).toContain('Matomo for analytics')
  })

  it('has demo button', () => {
    const wrapper = mount(About, {
      global: {
        plugins: [router]
      }
    })
    const button = wrapper.find('.demo-button')
    expect(button.exists()).toBe(true)
    expect(button.text()).toContain('Track "About Page Visited" Event')
  })
})