/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import ProgressLine from './components/progress-line.vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.component('progress-line', ProgressLine)

registerPlugins(app)

app.mount('#app')
