// footbar.js
class FootBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="row mx-0">
          <!-- Column 1 -->
          <div class="col-md-3 m-md-auto px-0" id="coloumn1">
            <img src="icons/logo.png" alt="Logo" class="img-fluid mb-2" id="footer-brand">
            <p>Bersama-sama meminimalisir<br>masalah kesehatan mental</p>
          </div>

          <!-- Column 2 -->
          <div class="col-md-3 px-0" id="coloumn2">
            <h5>Features</h5>
            <ul class="list-unstyled">
              <li><a href="#/mulai">Tes Psikologi</a></li>
              <li><a href="#/consul">Konsultasi gratis</a></li>
              <li><a id="lokasi">Temukan Bantuan</a></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div class="col-md-3 px-0" id="coloumn3">
            <h5>Connect Us</h5>
            <ul class="list-unstyled">
              <li id="li-footer">somen12@gmail.com</li>
              <li id="li-footer">Somen, Indonesia</li>
            </ul>
          </div>
        </div>

        <p class="mb-0 mt-4" id="copyright">Copyright 2023 • All rights reserved • Somen</p>
      </footer>
    `;
    this.afterRender();
  }

  afterRender() {
    const lokasiElement = this.querySelector('#lokasi');
    lokasiElement.addEventListener('click', this.findLocation.bind(this));
  }

  findLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const mapsUrl = `https://www.google.com/maps/search/psikolog+terdekat/@${latitude},${longitude}`;

          window.open(mapsUrl, '_blank');
        },
        function (error) {
          Swal.fire({
            title: 'upss!',
            text: 'Gagal mendapatkan lokasi. Pastikan GPS Anda aktif!',
            icon: 'error',
          });
        }
      );
    } else {
      alert('Browser Anda tidak mendukung geolokasi.');
    }
  }
}

customElements.define('foot-bar', FootBar);
