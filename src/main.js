import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// Code highlight config
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
import hljsVuePlugin from "@highlightjs/vue-plugin";
hljs.registerLanguage('python', python);
require('@/assets/styles/github-code.css')

createApp(App).use(router).use(hljsVuePlugin).mount('#app')

