;(function ($) {
    // Scripts that will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute.
    $(document).ready(function () {

    });

    // Scripts that will run after the whole page is loaded (images, videos, iframes. etc)
    $(window).on('load', function () {

      var mapContainer = $('#map')[0];

      var odessaLatLng = {lat: 46.4742893, lng: 30.7348775};
      var odessaIcon = 'img/odessa.png';
      var odessaContent = '<h3 class="title">Одесса</h3>'

      var kievLatLng = {lat: 50.450381, lng: 30.523993};
      var kievIcon = 'img/kiev.png';
      var kievContent = '<h3 class="title">Киев</h3>'

      var polatavaLatLng = {lat: 49.589440, lng: 34.551069};
      var poltaveIcon = 'img/polatava.png';
      var poltaveContent = '<h3 class="title">Полтава</h3>'


      var map = new google.maps.Map(mapContainer, {
        center: odessaLatLng,
        zoom: 15
      });

      var markerOdessa = new google.maps.Marker({
        position: odessaLatLng,
        map: map,
        icon: odessaIcon
      })

      var markerKiev = new google.maps.Marker({
        position: kievLatLng,
        map: map,
        icon: kievIcon
      })

      var markerPoltava = new google.maps.Marker({
        position: polatavaLatLng,
        map: map,
        icon: poltaveIcon
      })


      var infoOdess = new google.maps.InfoWindow({
        content: odessaContent
      })

      var infoKiev = new google.maps.InfoWindow({
        content: kievContent
      })

      var infoPolatava = new google.maps.InfoWindow({
        content: poltaveContent
      })


      markerOdessa.addListener('click', function() {
        infoOdess.open(map, markerOdessa);
      });

      markerKiev.addListener('click', function() {
        infoKiev.open(map, markerKiev);
      });

       markerPoltava.addListener('click', function() {
        infoPolatava.open(map, markerPoltava);
      });


      $('.btns').on('click', 'button', function(e){
          var locatinBtn = $(this).attr('data-adress');;

          if( locatinBtn === 'odessa' ){
            map.setCenter(odessaLatLng);
          } else if(  locatinBtn === 'kiev' ){
             map.setCenter(kievLatLng);
          } else if( locatinBtn === 'poltava' ){
            map.setCenter(polatavaLatLng);
          }
      })

         
    
    });

    

    // Scripts that will run on window resize
    $(window).on('resize', function () {

    });
})(jQuery);
