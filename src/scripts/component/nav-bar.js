class NavBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
      <a id="navbar-brand" href="index.html">
        <img src="icons/logo.png" alt="Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto" id="nav-items">
          <li class="nav-item" id="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item" id="nav-item">
            <a class="nav-link" href="#/test">Tes Psikologi</a>
          </li>
          <li class="nav-item" id="nav-item">
            <a class="nav-link" href="#/consul">Konsultasi</a>
          </li>
          <li class="nav-item" id="nav-item">
            <a class="nav-link" href="#/about">Tentang Kami</a>
          </li>
        </ul>
      </div>
    </nav>
    `;
  }
}

customElements.define('nav-bar', NavBar);
