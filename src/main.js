import { createApp } from 'vue';

import App from './App.vue';
import SimpleCalculator from './SimpleCalculator.vue';

const app = createApp(App);

app.component('simple-calculator', SimpleCalculator);
app.mount('#app');
