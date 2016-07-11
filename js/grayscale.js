/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".light").addClass("light-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".light").removeClass("light-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(38.5495, -92.0365));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 4,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(38.5495, -92.0365), // Monroe Mtn.

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"all","elementType":"all","stylers":[{"saturation":-100},{"gamma":0.5}]}]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker2.png';
    var monroe = new google.maps.LatLng(38.5495, -112.0365);
    var floridakeys = new google.maps.LatLng(24.677029, -81.358102);
    var everglades = new google.maps.LatLng(25.199868, -81.059980);
    var centralflorida = new google.maps.LatLng(27.426774, -81.627527);
    var algonquin = new google.maps.LatLng(45.463537, -78.868555);
    var wyoming = new google.maps.LatLng(42.829973, -108.732438);
    var lasangeles = new google.maps.LatLng(34.122170, -118.924209);
    var nevada = new google.maps.LatLng(39.550435, -119.699100);
    var alabama = new google.maps.LatLng(32.592601, -85.481324);
    var northcarol = new google.maps.LatLng(35.792752, -75.878715);
    var beachMarker = new google.maps.Marker({
        position: monroe,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: floridakeys,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: everglades,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: centralflorida,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: algonquin,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: wyoming,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: lasangeles,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: nevada,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: alabama,
        map: map,
        icon: image
    });
    var beachMarker = new google.maps.Marker({
        position: northcarol,
        map: map,
        icon: image
    });
}
