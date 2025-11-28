var json_path = "data_weather.json"
fetch(json_path)
    .then(response => response.json())
    .then(dati => {
        document.getElementById("date").textContent = dati["data"];
        document.getElementById("time").textContent = dati["time"];
        document.getElementById("city").textContent = dati["city"];
        document.getElementById("elevation").textContent = dati["elevation"];
        document.getElementById("temp").textContent = dati["temp"];
        document.getElementById("weather").textContent = dati["weather"];
        document.getElementById("wind_speed").textContent = dati["wind_speed"];
        document.getElementById("wind_dir").textContent = dati["wind_dir"];
        document.getElementById("day_night").textContent = dati["day_night"];
        document.getElementById("dht_temp").textContent = dati["dht_temp"];
        document.getElementById("dht_hum").textContent = dati["dht_hum"];
    })
    .catch(error => console.error("Errore nel caricamento del JSON:", error));
