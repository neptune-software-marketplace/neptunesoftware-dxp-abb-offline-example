let options = {
    key: "your-api-key", // Required - In Path
    lat: Math.round(latitude), // Required - In Path
    lon:  Math.round(longitude), // Required - In Path
    units: "metric",
};

apiGetWeather(options);
