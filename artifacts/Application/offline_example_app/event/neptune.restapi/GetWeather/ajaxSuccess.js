var result = xhr.responseJSON;

console.log(result);
TextCountry.setText(result.sys.country);
TextLat.setText(result.coord.lat);
TextLon.setText(result.coord.lon);
TextDesc.setText(result.weather[0].description);
TextTemp.setText(result.main.temp);
sap.m.MessageToast.show("Weather data cached. Go offline to see the results.");