import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { createApp } from 'vue';

import Page1 from './components/PageOne.vue';
import Page2 from './components/PageTwo.vue';
import Page3 from './components/PageThree.vue';

const app = createApp();

app.component('first-page', Page1);
app.component('data-component', Page2);
app.component('todo-component', Page3);

app.mount('#app');