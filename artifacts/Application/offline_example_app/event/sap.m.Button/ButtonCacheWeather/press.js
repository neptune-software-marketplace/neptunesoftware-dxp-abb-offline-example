let options = {
    key: "a314e15f4f9422fc0eb01e0281fd59fc", // Required - In Path
    lat: Math.round(latitude), // Required - In Path
    lon:  Math.round(longitude), // Required - In Path
    units: "metric",
};

apiGetWeather(options);
