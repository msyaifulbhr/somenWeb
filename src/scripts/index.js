import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/quis.css';
import '../styles/konsul.css';
import '../styles/about.css';
import '../styles/article.css';
import './component/nav-bar';
import './component/foot-bar';
import App from './views/app';
import Mulai from './views/pages/mulai-page';
import './component/article-bar';
// eslint-disable-next-line no-unused-vars
const app = new App();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  
});




