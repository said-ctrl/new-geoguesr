var marker;
map.on('click', function(e) {
    if (marker) {
        map.removeLayer(marker);
    }
    marker = L.marker(e.latlng).addTo(map);
    // Stocke la position devinée par le joueur
    var guessedLocation = e.latlng;
    console.log('Position devinée :', guessedLocation);
});