import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/quiz.css';

document.addEventListener('DOMContentLoaded', function() {
    // Pastikan kode di dalam event ini dijalankan setelah halaman selesai dimuat
    const btn4 = document.getElementById('btn4');
    if (btn4) {
        btn4.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    
                    const mapsUrl = `https://www.google.com/maps/search/psikolog+terdekat/@${latitude},${longitude}`;
                    
                    window.open(mapsUrl, '_blank');
                }, function(error) {
                    alert('Gagal mendapatkan lokasi. Pastikan GPS Anda aktif.');
                });
            } else {
                alert('Browser Anda tidak mendukung geolokasi.');
            }
        });
    } 
});

