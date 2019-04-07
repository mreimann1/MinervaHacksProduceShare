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

     function getCity(location)
     {
        if(location)
        {
            for(var i = 0; i < location.address_components.length; i++)
            {
              for(var j = 0; j < location.address_components[i].types.length; j++)
              {
                 if(location.address_components[i].types[j] == "locality")
                  {
                      city = location.address_components[i].long_name;
                      console.log(city);
                      return;
                  }
                  if(location.address_components[i].types[j] == "administrative_area_level_1")
                      city = location.address_components[i].long_name;
              }
            }
        }
        else
            city = "San Francisco";
        console.log(city);
     }

    window.onload = function()
    {
          /* voltar pra resolver um bug, se nao aceitar colocar vazio */
          var result;
          navigator.geolocation.getCurrentPosition(function(location) {
          user_geolocation.lat = location.coords.latitude;
          user_geolocation.lng = location.coords.longitude;
          //user_geolocation.lat = -23.000372;
          //user_geolocation.lng = -43.365894;
          intialize_geoCoder();
          if(user_geolocation.lat)
          {
              geoCoder.geocode({'location': user_geolocation}, function(results, status) {
                  if(status != google.maps.GeocoderStatus.OK)
                      result = false;
                  else
                    result = results[0];
                  getCity(result);
              });
          }
          else 
              getCity(false);
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
