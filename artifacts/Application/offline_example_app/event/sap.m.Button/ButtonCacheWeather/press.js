let options = {
    key: "yourapikey", // Required - In Path
    lat: Math.round(latitude), // Required - In Path
    lon:  Math.round(longitude), // Required - In Path
    units: "metric",
};

apiGetWeather(options);
