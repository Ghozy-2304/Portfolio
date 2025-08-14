AOS.init();

var typed = new Typed("#typed-output", {
    strings: ["Azzam Ghozy!"],
    typeSpeed: 100,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 3500,
    loop: false
});

window.onload = function () {
      setTimeout(() => {
        const opening = document.getElementById('opening');
        opening.style.animation = "slideUp 1s forwards";

        // Tampilkan konten setelah animasi selesai
        setTimeout(() => {
          opening.style.display = 'none';
          document.getElementById('content').style.display = 'block';
          document.body.style.overflow = 'auto';
          AOS.refresh();
        }, 1000);
      }, 1500); // tampil selama 3 detik sebelum animasi keluar
    };