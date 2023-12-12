import articlesData from '../data/data-articles';

class ArticleBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <section class="article-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1 id="hero-title">Artikel</h1>
            </div>
          </div>

          <div id="carouselIndicators" class="carousel slide" data-ride="carousel">

            <div class="carousel-inner">
              ${articlesData.map((article, index) => `
                <div class="carousel-item ${index === 0 ? 'active' : ''}">
                  <div class="cards-wrapper">
                    <div class="card">
                      <img src="${article.image}" class="card-img-top" alt="${article.title}" />
                      <div class="card-body">
                        <a href="#/article/${article.id}" class="card-link">
                          <p class="card-text">${article.title}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>

        </div>
      </section>
    `;
  }
}

customElements.define('article-bar', ArticleBar);
