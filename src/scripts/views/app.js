import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor() {
    this._content = document.getElementById('mainContent');
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (page) {
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } else {
      console.error('Page not found');
    }
  }
}

export default App;
