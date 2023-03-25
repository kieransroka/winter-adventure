function locationHandler(data) {
    if (data.data === 'locationRequest') {
        locationRel = window.location.href;
        parent.postMessage(locationRel, '*');
    }
    else if (data.data === 'windowHistory') {
        this.history.back();
    }
    else if (data.data === 'windowFwd') {
        this.history.forward();
    }
    else if (data.data === 'windowFocus') {
        window.addEventListener("click", function () {
            windowFocus = 'windowFocus';
            parent.postMessage(windowFocus, '*');
        })
    }
}

window.addEventListener("load", function () {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
        document.getElementById("date").innerHTML = day + "/" + "0" + month + "/" + year;
    } else {
        document.getElementById("date").innerHTML = day + "/" + month + "/" + year;
    }

    if (localStorage.getItem("username") !== null) {
        document.getElementById("username-display").innerHTML = "Welcome " + localStorage.getItem("username").charAt(0).toUpperCase() + localStorage.getItem("username").slice(1);
    }
})
if ($("body").is("#index")) {
    $('body').scrollspy({
        target: '#main-nav'
    });

    // Add smooth scrolling
    $('#main-nav a').on('click', function (e) {
        // Check for a hash value
        if (this.hash !== '') {
            // Prevent default behavior
            e.preventDefault();

            // Store hash
            const hash = this.hash;

            // Animate smooth scroll
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                // Add hash to URL after scroll
                window.location.hash = hash;
            });
        }
    });
}
$('.carousel').carousel({
    interval: 3000, //interval between image change
    keyboard: true, //change image when key is presssed ... unsure of keys
    pause: 'hover', //pause carousel slider when mouse pointer hovers over image
    wrap: true //stop when get to last slide if set to false. Set to true by default keeps looping
});
$('#news-form').submit(function (e) {
    e.preventDefault();
})

function modalForm() {
    $('#newsletter').modal('toggle');
    let username = document.getElementById("username").value;
    localStorage.setItem("username", username);
    document.getElementById("username-display").innerHTML = "Welcome " + localStorage.getItem("username").charAt(0).toUpperCase() + localStorage.getItem("username").slice(1);
    $('#news-confirm').modal('toggle');
}

// Canvas
var canvas, context, canvaso, contexto;
canvaso = document.getElementById('logo');
context = canvaso.getContext('2d');

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(1, 37);
context.lineTo(14, 10);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(14, 10);
context.lineTo(25, 37);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(18, 19);
context.lineTo(27, 0);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(27, 0);
context.lineTo(38, 20);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(32, 37);
context.lineTo(43, 10);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(43, 10);
context.lineTo(55, 37);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(34, 13);
context.lineTo(37, 6);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(37, 6);
context.lineTo(39, 10);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(39, 10);
context.lineTo(41, 6);
context.stroke();
context.closePath();

context.strokeStyle = '#ffff';
context.beginPath();
context.moveTo(41, 6);
context.lineTo(43, 10);
context.stroke();
context.closePath();


// Maps
// Create an icon, an object holding the latitude and longitude, and a marker:
var icon = new H.map.Icon('media/skiing-man.svg', {
    size: {
        w: 35,
        h: 35
    }
});
$(document).ready(function () {
    var platform = new H.service.Platform({
        'apikey': 'mPb-w8DmE_ZIEJbjsjXE4yI4ywfS2__qwtO0OYwY5Lo'
    });
    // Obtain the default map types from the platform object:
    var defaultLayers = platform.createDefaultLayers();
    //La Tania
    // Instantiate (and display) a map object:
    if (window.location.href.includes("la-tania")) {
        var map = new H.Map(
            document.getElementById('la-tania-map'),
            defaultLayers.vector.normal.map, {
            zoom: 14,
            center: {
                lat: 45.43100063066549,
                lng: 6.596403659783837
            },
        });
        var marker = new H.map.Marker({
            lat: 45.43100063066549,
            lng: 6.596403659783837
        }, {
            icon: icon
        });
        // Add the marker to the map
        map.addObject(marker);
        var circle = new H.map.Circle({
            lat: 45.43100063066549,
            lng: 6.596403659783837
        }, 450)
    } else if (window.location.href.includes("tignes")) {
        map = new H.Map(
            document.getElementById('tignes-map'),
            defaultLayers.vector.normal.map, {
            zoom: 14,
            center: {
                lat: 45.46938451876267,
                lng: 6.906942834309851
            },
        });
        marker = new H.map.Marker({
            lat: 45.46938451876267,
            lng: 6.906942834309851
        }, {
            icon: icon
        });
        // Add the marker to the map
        map.addObject(marker);
        circle = new H.map.Circle({
            lat: 45.46938451876267,
            lng: 6.906942834309851
        }, 1000)
    } else if (window.location.href.includes("morzine")) {
        map = new H.Map(
            document.getElementById('morzine-map'),
            defaultLayers.vector.normal.map, {
            zoom: 14,
            center: {
                lat: 46.180041000378395,
                lng: 6.701882515310196
            },
        });
        marker = new H.map.Marker({
            lat: 46.180041000378395,
            lng: 6.701882515310196
        }, {
            icon: icon
        });
        // Add the marker to the map
        map.addObject(marker);
        circle = new H.map.Circle({
            lat: 46.180041000378395,
            lng: 6.701882515310196
        }, 1050)
    }
    map.addObject(circle);
    // Create the default UI:
    H.ui.UI.createDefault(map, defaultLayers);
    window.addEventListener('resize', function () {
        map.getViewPort().resize();
    });
})

// Weather
let city;
if (window.location.href.includes("tignes")) {
    city = "2972607";
} else if (window.location.href.includes("la-tania")) {
    city = "2975517";
} else if (window.location.href.includes("morzine")) {
    city = "2991630";
}
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({
    id: 1,
    cityid: city,
    appid: '1fc0d895e8bfc7f06adecbf7dce883b9',
    units: 'metric',
    containerid: 'openweathermap-widget-1',
});
(function () {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
})();
window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
window.myWidgetParam.push({
    id: 2,
    cityid: city,
    appid: '1fc0d895e8bfc7f06adecbf7dce883b9',
    units: 'metric',
    containerid: 'openweathermap-widget-2',
});
(function () {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
})();

//Booking
function bookingPrice() {
    let packageSelect = document.getElementById("package-select").value;
    let skiTotal;
    let snowboardTotal;
    let skiParty = document.getElementById("ski-party").value;
    let snowboardParty = document.getElementById("snowboard-party").value;
    let totalParty = skiParty + snowboardParty;
    if (packageSelect === "eco") {
        document.getElementById("ski-price").innerHTML = "£90 Per Week Per Person";
        skiTotal = skiParty * 90;
        document.getElementById("snowboard-price").innerHTML = "£119 Per Week Per Person";
        snowboardTotal = snowboardParty * 90;
    } else if (packageSelect === "int") {
        document.getElementById("ski-price").innerHTML = "£120 Per Week Per Person";
        skiTotal = skiParty * 120;
        document.getElementById("snowboard-price").innerHTML = "£145 Per Week Per Person";
        snowboardTotal = snowboardParty * 145;
    } else if (packageSelect === "perf") {
        document.getElementById("ski-price").innerHTML = "£145 Per Week Per Person";
        skiTotal = skiParty * 145;
        document.getElementById("snowboard-price").innerHTML = "£170 Per Week Per Person";
        snowboardTotal = snowboardParty * 170;
    }

    let totalPrice = skiTotal + snowboardTotal;
    if (totalParty >= 4) {
        totalPrice *= 0.9
    }
    document.getElementById("total-price").innerHTML = "Sub-Total: £" + totalPrice;
}
let changers = document.getElementsByClassName("calculate");
for (let e of changers) {
    e.addEventListener("change", function () {
        bookingPrice();
    })
}