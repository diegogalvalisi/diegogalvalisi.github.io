function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -34.90602411720617, lng: -56.20203288465599};
    
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Jakarta, INA' // Title Location
    });
}