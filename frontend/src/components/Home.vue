<template>
  <div class="home">
    <header class="hero-section">
      <h1>Matomo Vue3 Integration Demo</h1>
      <p class="hero-description">
        Welcome to the Matomo analytics integration example! 
        This demo showcases privacy-friendly, self-hosted analytics.
      </p>
    </header>
    
    <section class="demo-section">
      <h2>🎯 Analytics Demo</h2>
      <p>Try these interactive examples to see Matomo tracking in action:</p>
      
      <div class="button-group">
        <button @click="trackCustomEvent" class="demo-button primary">
          📊 Track Custom Event
        </button>
        <button @click="trackGoal" class="demo-button secondary">
          🎯 Track Goal
        </button>
      </div>
      
      <div v-if="lastAction" class="status-message" :class="statusClass">
        {{ lastAction }}
      </div>
    </section>
    
    <section class="info-section">
      <h3>📈 What's being tracked:</h3>
      <div class="tracking-grid">
        <div class="tracking-item">
          <span class="icon">👁️</span>
          <div>
            <strong>Page Views</strong>
            <p>Automatic tracking of page visits</p>
          </div>
        </div>
        <div class="tracking-item">
          <span class="icon">🔄</span>
          <div>
            <strong>Route Changes</strong>
            <p>SPA navigation tracking</p>
          </div>
        </div>
        <div class="tracking-item">
          <span class="icon">🖱️</span>
          <div>
            <strong>Custom Events</strong>
            <p>User interaction tracking</p>
          </div>
        </div>
        <div class="tracking-item">
          <span class="icon">🎯</span>
          <div>
            <strong>Goals</strong>
            <p>Conversion tracking</p>
          </div>
        </div>
      </div>
    </section>

    <section class="links-section">
      <h3>🔗 Quick Links</h3>
      <div class="links-grid">
        <a href="http://localhost:8081" target="_blank" class="link-card">
          <span class="link-icon">📊</span>
          <div>
            <strong>Matomo Dashboard</strong>
            <p>View your analytics data</p>
          </div>
        </a>
        <router-link to="/about" class="link-card">
          <span class="link-icon">ℹ️</span>
          <div>
            <strong>About This Demo</strong>
            <p>Learn more about the integration</p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { trackEvent, trackGoal as trackMatomoGoal } from '../plugins/matomo'

  const lastAction = ref<string>('')
  const statusClass = ref<string>('success')

  const showStatus = (message: string, type: 'success' | 'error' = 'success') => {
    lastAction.value = message
    statusClass.value = type
    
    // Clear message after 3 seconds
    setTimeout(() => {
      lastAction.value = ''
    }, 3000)
  }

  const trackCustomEvent = () => {
    try {
      trackEvent('Demo', 'Button Click', 'Custom Event Button')
      showStatus('✅ Custom event tracked successfully!', 'success')
    } catch (error) {
      console.error('Failed to track custom event:', error)
      showStatus('❌ Failed to track custom event', 'error')
    }
  }

  const trackGoal = () => {
    try {
      trackMatomoGoal(1) // Goal ID 1
      showStatus('🎯 Goal tracked successfully!', 'success')
    } catch (error) {
      console.error('Failed to track goal:', error)
      showStatus('❌ Failed to track goal', 'error')
    }
  }
</script>

<style scoped>

</style>