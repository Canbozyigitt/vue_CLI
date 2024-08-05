import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/header.vue'
import Footer from './components/footer.vue'; // Footer'ı büyük harfle başlatmak yaygın bir uygulamadır

const app = createApp(App);

// Header ve Footer bileşenlerini global olarak kaydediyoruz
app.component("app-header", Header);
app.component("app-footer", Footer);

app.mount('#app');


