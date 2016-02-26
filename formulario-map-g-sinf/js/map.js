
// MAP GOOGLE

       function init_map() {
    var myLocation = new google.maps.LatLng(-34.6080512,-58.3724665);
      
        var mapOptions = {
          center: myLocation,
          zoom: 12
        };
    
    var marker = new google.maps.Marker({
      position: myLocation,
      title:"Peggy Guggenheim Collection"});
      
        var map = new google.maps.Map(document.getElementById("map-container"),
            mapOptions);
    
    marker.setMap(map); 

      }
    
      google.maps.event.addDomListener(window, 'load', init_map);