<script>
    // Fungsi untuk menangani klik pada tombol "Selengkapnya"
    function scrollToSection2() {
      // Menggunakan jQuery untuk animasi gulir ke bagian kedua
      $('html, body').animate({
        scrollTop: $('#section2').offset().top
      }, 'slow');
    }
  </script>