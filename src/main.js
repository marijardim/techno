import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadingComponent from '@/components/LoadingComponent'

createApp(App).use(store).use(router).component('LoadingComponent', LoadingComponent).mount('#app')
