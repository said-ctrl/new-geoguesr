let pos;

let map = L.map('map').setView([0, 0], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);






let popup = L.popup();


map.on('click', (e) => {
  
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    let lat = e.latlng.lat;
    let lng = e.latlng.lng;
    pos = [lat, lng];
  
    
});


function getRandomLocation() {
    const lat = (Math.random() * 180) - 90;
    const lng = (Math.random() * 360) - 180;
    return [lat, lng];
}

let randomLocation = getRandomLocation();

map.setView(randomLocation, 1);




var marker = L.marker(randomLocation).addTo(map);

console.log(randomLocation);

// Récupérer le bouton par son ID
var button = document.getElementById('button');

// Ajouter un événement 'click' au bouton
button.addEventListener('click', function () { var marker
  
  console.log(pos);
  
    
});

// Récupérer la position sauvegardée au chargement de la page
window.onload = function () {
    var savedPosition = localStorage.getItem('clickPosition');
    if (savedPosition) {
        var position = JSON.parse(savedPosition);
        L.marker([position.lat, position.lng]).addTo(map);
        map.setView([position.lat, position.lng], 13);
    }
};
function calculateScore(randomLocation, guessedLocation) {
    const distance = map.distance(actualLocation, guessedLocation);
    return Math.max(0, 5000 - distance / 1000); // Exemple de calcul de score

}