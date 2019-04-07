     var map, infoWindow;
     var user_geolocation = {
        lat: null,
        lng: null
     };
     var geoCoder, city;

     function intialize_geoCoder()
     {
        geoCoder = new google.maps.Geocoder;
     }

     function defaultGeoLocation()
     {
        user_geolocation.lat = 37.7822705;
        user_geolocation.lng = -122.3911401;
     }

     function getCity(geolocation)
     {
        if(geolocation)
        {
            city = "San Francisco";
        }
        else
            city = "San Francisco";
     }

    window.onload = function()
    {
          navigator.geolocation.getCurrentPosition(function(location) {
          user_geolocation.lat = location.coords.latitude;
          user_geolocation.lng = location.coords.longitude;
          intialize_geoCoder();
          
          if(user_geolocation.lat)
          {
              geoCoder.geocode({'location': user_geolocation}, function(results, status) {
                  if(status != google.maps.GeocoderStatus.OK)
                      results = false;
                  getCity(results);
              });
          }
          else {
              console.log("deu ruim");
          }
        });
      }
/*
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 6
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }
*/
