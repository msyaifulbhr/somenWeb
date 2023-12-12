import About from '../views/pages/about-page';
import Article from '../views/pages/article-page';
import Consul from '../views/pages/consul-page';
import Home from '../views/pages/home-page';
import Test from '../views/pages/test-page';

const routes = {
  '/': Home,
  '/test': Test,
  '/consul': Consul,
  '/about': About,
  '/article/:id': Article,
};

export default routes;
