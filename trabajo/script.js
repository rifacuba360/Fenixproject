document.addEventListener("DOMContentLoaded", () => {
    const introVideo = document.getElementById('introVideo');
    const logo3d = document.getElementById('logo3d');
    const intro = document.getElementById('intro');
    const content = document.getElementById('content');
    const introAudio = document.getElementById('introAudio');

    // Reproducir audio (puede requerir interacción)
    introAudio.play().catch(() => console.log("Audio requiere interacción del usuario"));

    introVideo.onended = () => {
        // Mostrar logo 3D 0.5s después
        setTimeout(() => {
            logo3d.style.opacity = "1";
            logo3d.style.transform = "translate(-50%, -50%) scale(1)";
        }, 500);

        // Ocultar video
        introVideo.style.transition = "opacity 1s ease";
        introVideo.style.opacity = "0";

        // Después de 3s de mostrar logo, ocultar intro y mostrar contenido
        setTimeout(() => {
            intro.style.transition = "opacity 1s ease";
            intro.style.opacity = "0";

            setTimeout(() => {
    intro.style.display = "none";
    // Redirigir a la página externa
    window.location.href = "fija.html";
}, 1000);

            setTimeout(() => {
   
                setTimeout(() => content.style.opacity = 1, 50);
            }, 1000);
        }, 3000);
    };
}); 

