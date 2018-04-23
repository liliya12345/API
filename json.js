var yourCity;
var list = [];
    var   late;
    var   lon;
    var now;
$(function () {
    
    var url_ip = 'https://ipinfo.io';
    $.ajax({
        url: url_ip,
        dataType: 'json',
        type: 'GET'

    })
        .done(function (done) {
            console.log(done);
            showResults(done);

        })
        .fail(function (fail) {
            console.log(fail);
        });
    function showResults(data) {
        $.each(data, function (i, value) {
            yourCity = data.city;
            $(".weather_result1").append(`<p class="text">${yourCity} <br></p>`);
            $(".weather_block").append(`<p class="block"><br> Ip: ${data.ip} <br>${data.region}<br>${data.city}</br> <br></p>`);
            return false;

        })

        $(function () {
            var url = 'https://api.openweathermap.org/data/2.5/weather';
            var rules = {
                q: yourCity,
                appid: "90bdec30e54ffb77680aceeaf28fcda8",
            };

            $.ajax({
                url: url,
                dataType: 'json',
                data: rules,
                type: 'GET'

            })
                .done(function (done) {
                    console.log(done);
                    showResults(done);

                })
                .fail(function (fail) {
                    console.log(fail);
                });
            function showResults(data) {
                showWeather(data);
                var timestr1 = (new Date(data.sys.sunrise * 1000)).toLocaleTimeString();
                var timestr = (new Date(data.sys.sunset * 1000)).toLocaleTimeString();
                $(".weather_result").append(`<p class="text">${Math.round(data.main.temp - 273)} &#176C</p>`);
                $.each(data.main, function (i, value) {
                late= data.coord.lat;
                lon= data.coord.lon;
                    $(".weather_block").append(`<p class="block">${i}:${Math.round(value - 273)} &#176C</br>Sunset :${timestr}</br></br>Sunrise :${timestr1}</br>
                    </br> Time:${new Date()} <br> Humidity : ${data.main.humidity}%</br></br> Weather:${data.weather[0].main} <br></p>`);
                    return false;
                });
                function showWeather(data) {

                    var weather = data.weather[0].main;
                    var sunset = data.sys.sunset;
                    var sunrise = data.sys.sunrise;
                    now = parseInt(new Date().getTime() / 1000);
                    if (sunset < now < sunrise) {
                        $(".article").css("background", "#1A024F");
                        $(".night").css("display", "block");
                        $(".wether").css("color", "white");
                    }
                    else if (weather == "Clouds") {
                        $(".clouds").css("display", "block");
                    }
                    else if (weather == "Sun") {
                        $(".sun").css("display", "block");
                    }
                    else if (weather == "Rain") {
                        $(".rain").css("display", "block");
                    }
                    else if (weather == "Clear") {
                        $(".sun").css("display", "block");
                    }
                    else {
                        $(".clouds").css("display", "block");
                    }
                }
                $(function () {
                    $('#search-form').submit(function (e) {
                        list.length=0;
                        $(".postnord").empty();
                        $("div#map").empty();
                        e.preventDefault();
                        var searchTerm = $('#search-input').val();
                        console.log(searchTerm);
                        getRequest(searchTerm);
                    });
                    function getRequest(searchTerm) {
                    var apikey = 'c840f36a685be80001b8dbb743c42076';
                    console.log(searchTerm);
                    var rules = {
                        "countryCode": "SE",
                        "city": searchTerm,

                    };

                    $.ajax({
                        url: 'https://api2.postnord.com/rest/businesslocation/v1/servicepoint/findNearestByAddress.json?' + 'apikey=' + apikey,
                        dataType: 'jsonp',
                        data: rules,
                        // type:'GET',
                    })
                        .done(function (done) {
                            //console.log(done);
                            console.log(done);
                            showResults(done.servicePointInformationResponse);


                        })
                        .fail(function (fail) {
                            console.log(fail);
                        });
                    function showResults(data) {
                        
                        $.each(data.servicePoints, function (i, value) {
                            $(".postnord").append(`<li class="logo1">${value.name}<br> ${value.deliveryAddress.streetName}<br>
                            ${value.deliveryAddress.streetNumber}<br><br> </li>`);                          
                            $(".poster").append(`<div id="map"></div>`);
                            late=value.coordinate.easting;
                            lon=value.coordinate.northing;
                                list.push({late: value.coordinate.easting, lon:value.coordinate.northing});
                              initMap(); 
                              return; 
                              
                                
                            }); 
                            return;
                        };
                       
                        console.log(list);
                   } });

                };


            });
        };
    });


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: new google.maps.LatLng(lon,late),
          mapTypeId: 'terrain'
        });

        for (var i = 0; i < list.length; i++) {
          var latLng = new google.maps.LatLng(list[i].lon,list[i].late);
          var marker = new google.maps.Marker({
            position: latLng,
            map: map,

            
          });
          
        }
        $("#map").css("display", "block");
        
      };