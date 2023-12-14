class NavBar extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">
      <img src="icons/logo.png" id="logosomen" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/mulai" id="navkuis">Tes Psikologi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/consul">Konsultasi</a>
        </li>
        <!-- Dropdown Mini Games -->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Mini Games
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="https://www.sonsaur.com/summer-lake-1-5/" target="_blank">Game memancing</a>
    <a class="dropdown-item" href="https://id.akinator.com/game" target="_blank">Game meramal</a>
    <a class="dropdown-item" href="https://www.crazygames.com/game/man-runner-2048" target="_blank">Game lari</a>
          </div>
        </li>
        <!-- End Dropdown Mini Games -->
        <li class="nav-item">
          <a class="nav-link" href="#/about">Tentang Kami</a>
        </li>
        
      </ul>
    </div>
</nav>

    `;
  }
}

customElements.define('nav-bar', NavBar);
