function initializeMap()
{
    var location = new google.maps.LatLng(41.178008, -8.605976);

    var map = new google.maps.Map(
        document.getElementById("map-container"),
        {
            zoom: 15,
            center: location,
            scrollwheel: false
        }
    );

    new google.maps.Marker(
        {
            position: location,
            map: map,
            title: 'CISTER Research Center'
        }
    );
}

google.maps.event.addDomListener(window, 'load', initializeMap);