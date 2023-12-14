import articlesData from '../../../public/data/data-articles';

const ArticlePage = {
  async render() {
    const url = window.location.hash.slice(1).toLowerCase();
    const articleId = url.split('/')[2];

    // eslint-disable-next-line max-len, radix
    const currentArticle = articlesData.find((article) => article.id === parseInt(articleId));

    if (!currentArticle) {
      return '<p>Artikel tidak ditemukan!</p>';
    }

    return `
      <article>
        <h1 class="font-weight-bold article-title">${currentArticle.title}</h1>
        <img src="${currentArticle.image}" alt="Gambar artikel ${currentArticle.id}" class="article-img" />

        <div class="article-content">
          <p>${currentArticle.content.intro}</p>
          <ol>
            ${currentArticle.content.discuss.map((item) => `<li>${item}</li>`).join('')}
          </ol>
          <p>${currentArticle.content.conclusion}</p>
        </div>

        <div class="article-source">
          <h3>Sumber:</h3>
          <ul>
            ${currentArticle.source.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        
      </article>
    `;
  },

  async afterRender() {
    window.scrollTo(0, 0);
  },
};

export default ArticlePage;
