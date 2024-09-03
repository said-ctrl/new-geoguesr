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

    ;

});


function getRandomLocation() {
    const lat = (Math.random() * 180) - 90;
    const lng = (Math.random() * 360) - 180;
    return [lat, lng];
}

let randomLocation = getRandomLocation();

map.setView(randomLocation, 1);





var marker = L.marker(randomLocation).addTo(map);


// Récupérer le bouton par son ID
var button = document.getElementById('button');

// Ajouter un événement 'click' au bouton
button.addEventListener('click', function () {
    button.style.display = "none";





});

// Récupérer la position sauvegardée au chargement de la page

var resultat = document.getElementById('btn');

//appel du bouton et cacher le bouton//
resultat.addEventListener('click', function () {

    setTimeout(() => {
        resultat.style.display = "none";
    }, 500);







    var latitude = pos[0] - randomLocation[0];
    var longitude = pos[1] - randomLocation[1];

    var double = [randomLocation, pos];
    //cree la ligne de distance
    var polyline = L.polyline(double, { color: 'red' }).addTo(map);

    var distance = map.distance(pos, randomLocation);




    document.getElementById('result').textContent = "La distance entre les deux points est de " + distance + " metre.";


});
let data = [
    {
        "image": ["images/maroc.jpg"],
        "lati": 47.556225,
        "longi": 13.645990,


    },
    {
        "image": ["images/montbe.webp"],
        "lati": 24.183438,
        "longi": 102.230346,

    },
    {
        "image": ["images/paris.jpg"],
        "lati": -22.980226,
        "longi": -43.189026,
    },
    {
        "image": ["images/qatar.webp"],
        "lati": 4.333397,
        "longi": 73.599140,

    },
    {
        "image": ["images/russie.jpg"],
        "lati": 45.553261,
        "longi": -73.581531,

    },
    {
        "image": ["images/sarrebourg.jpg"],
        "lati": 55.758390,
        "longi": 37.635335,

    },
    {
        "image": ["images/ukraine.jpg"],
        "lati": 48.070569,
        "longi": 6.855323,

    },

    {
        "image": ["images/japon.jpg"],
        "lati": 47.556225,
        "longi": 13.645990,


    },
    {
        "image": ["images/ilescanarie.jpg"],
        "lati": 47.556225,
        "longi": 13.645990,

    },
    {
        "image": ["images/dubai.avif"],
        "lati": 25.2653471,
        "longi": 55.2924914,
    },
    {
        "image": ["images/chine.jpg"],
        "lati": 35.000074,
        "longi": 104.999927,
    },
    {
        "image": ["images/brazil.jpg"],
        "lati": -14.235004,
        "longi": -51.92528,
    },
    {
        "image": ["images/allemagne.jpg"],
        "lati": 51.165707,
        "longi": 10.452764,
    },
    {
        "image": ["images/afriquesud.jpg"],
        "lati": -28.48322,
        "longi": 24.676997,

    },


]
// fonction choix aleatoirs//
function getRandomItem(arr) {

    return randomIndex = Math.floor(Math.random() * data.length);

}let result = getRandomItem(data);
console.log(result )

let phot = document.getElementById('photo');
let photo = document.createElement('img');

photo.style.height = "25rem";
photo.src = data[result]['image'];
phot.appendChild(photo);




