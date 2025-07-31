<template>
  <div class="about">
    <h1>About This Demo</h1>
    
    <div class="content">
      <h2>Matomo Vue3 Integration</h2>
      <p>
        This demo showcases how to integrate Matomo analytics with a Vue 3 application.
        Matomo is a privacy-friendly, open-source alternative to Google Analytics.
      </p>
      
      <h3>Features Demonstrated:</h3>
      <ul>
        <li>Automatic page view tracking</li>
        <li>Route change tracking in SPA</li>
        <li>Custom event tracking</li>
        <li>Goal conversion tracking</li>
        <li>Self-hosted analytics solution</li>
      </ul>
      
      <h3>Tech Stack:</h3>
      <ul>
        <li>Vue 3 with Composition API</li>
        <li>Vue Router for navigation</li>
        <li>Vite for build tooling</li>
        <li>TypeScript for type safety</li>
        <li>Matomo for analytics</li>
        <li>Docker for containerization</li>
      </ul>
      
      <div class="demo-actions">
        <button @click="trackAboutPageEvent" class="demo-button">
          Track "About Page Visited" Event
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { trackEvent } from '../plugins/matomo'

const trackAboutPageEvent = () => {
  trackEvent('Navigation', 'About Page', 'User visited about page')
  alert('About page event tracked!')
}
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.content {
  line-height: 1.6;
}

.content h2, .content h3 {
  color: #2c3e50;
  margin-top: 30px;
}

.content ul {
  margin: 15px 0;
  padding-left: 20px;
}

.content li {
  margin: 8px 0;
}

.demo-actions {
  margin-top: 30px;
  text-align: center;
}

.demo-button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.demo-button:hover {
  background-color: #369870;
}
</style>