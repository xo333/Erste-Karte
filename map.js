//
let mymap = L.map('map').setView([47,11],13);

let basemap = L.tileLayer("https://maps.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png").addTo (mymap);