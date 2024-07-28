document.addEventListener("DOMContentLoaded", function() {
    var simbolos = document.querySelectorAll(".elemento");
    var hoverSound = document.getElementById("hover-sound");

    simbolos.forEach(function(simbolo) {
        simbolo.addEventListener("mouseover", function() {
            hoverSound.currentTime = 0; 
            hoverSound.play().catch(function(error) {
                console.log('Playback prevented: ' + error);
            });
        });
    });
});
