// Matomo tracking plugin for Vue 3
declare global {
  interface Window {
    _paq: any[][];
  }
}

let isInitialized = false;

export function initMatomo() {
  if (isInitialized) return;
  
  // Initialize Matomo tracking code
  window._paq = window._paq || [];
  
  // Configure Matomo
  window._paq.push(['trackPageView']);
  window._paq.push(['enableLinkTracking']);
  
  // Set the Matomo URL and site ID
  const matomoUrl = 'http://localhost:8081/';
  const siteId = '1';
  
  window._paq.push(['setTrackerUrl', matomoUrl + 'matomo.php']);
  window._paq.push(['setSiteId', siteId]);
  
  // Load Matomo tracking script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = matomoUrl + 'matomo.js';
  
  const firstScript = document.getElementsByTagName('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
  
  isInitialized = true;
}

export function trackPageView(customTitle?: string) {
  if (!window._paq) return;
  
  if (customTitle) {
    window._paq.push(['setDocumentTitle', customTitle]);
  }
  
  window._paq.push(['setCustomUrl', window.location.href]);
  window._paq.push(['trackPageView']);
}

export function trackEvent(category: string, action: string, name?: string, value?: number) {
  if (!window._paq) return;
  
  const eventData: (string | number)[] = ['trackEvent', category, action];
  if (name) eventData.push(name);
  if (value !== undefined) eventData.push(value);
  
  window._paq.push(eventData);
}

export function trackGoal(goalId: number, customRevenue?: number) {
  if (!window._paq) return;
  
  const goalData: (string | number)[] = ['trackGoal', goalId];
  if (customRevenue !== undefined) goalData.push(customRevenue);
  
  window._paq.push(goalData);
}