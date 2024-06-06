clearFormCache();

let latitude;
let longitude;

navigator.geolocation.getCurrentPosition((pos) => {
    latitude = pos.coords.latitude;
    longitude = pos.coords.longitude;
});

function handleOnline() {
    sap.m.MessageToast.show("Online!");
    ButtonCacheWeather.setEnabled(true);

    const formData = modelFormData.getData();

    if (formData.length > 0) {
        saveFormData(formData);
    }
}

function handleOffline() {
    sap.m.MessageToast.show("Offline!");
    ButtonCacheWeather.setEnabled(false);
    displayWeather();
}

window.addEventListener("offline", handleOffline, false);
window.addEventListener("online", handleOnline, false);

function saveFormData(formData) {
    var options = {
        data: formData,
    };
    apiSaveNote(options);
}

function clearFormCache() {
    modelFormData.setData([]);
    setCacheFormData();
}

function displayWeather() {
    const data = modelWeatherData.getData();
    TextCountry.setText(data.sys.country);
    TextLat.setText(data.coord.lat);
    TextLon.setText(data.coord.lon);
    TextDesc.setText(data.weather[0].description);
    
    let celcius = Math.round(Number(data.main.temp)-273.15);
    TextTemp.setText(String(celcius)+"°C");
}
