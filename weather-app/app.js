//https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

const apiKey = "d581afce5c7e6a7e3bf6908a16d160c5";
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const weather = document.querySelector(".weather");
const card = document.querySelector(".card");

async function checkWeather(){


    try{


        while(weather.firstChild) {
            weather.removeChild(weather.firstChild);
        }

        const cityInput = searchInput.value.toLowerCase();
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=imperial&appid=${apiKey}`);
        
        if(!response.ok){
            throw new Error("Could not fetch weather data");
        }

        const data = await response.json();

        if(data){

        const temp = document.createElement('h1');
        const city = document.createElement('h2');
        const humidity = document.createElement("p");
        const wind = document.createElement("p");
        const weatherIcon = document.createElement("img");


            temp.classList.add("temp");
            city.classList.add("city");
            humidity.classList.add("humidity");
            wind.classList.add("wind");
            weatherIcon.id = "weather-icon";

            city.textContent = `${data.name}`; 
            temp.textContent = `${((data.main.temp - 32) * (5 / 9)).toFixed(2)}°C`;
            humidity.textContent = `Humidity: ${data.main.humidity} %`;
            wind.textContent = `Wind speed: ${data.wind.speed} m/s`;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherIcon.style.width = 50 + 'px';
            weatherIcon.style.height = 50 + 'px';

            weather.style.display = "block";
            weather.appendChild(weatherIcon);
            weather.appendChild(temp);
            weather.appendChild(city);
            weather.appendChild(humidity);
            weather.appendChild(wind);
  
        // console.log(weather.firstChild);

        }

        else{
            throw new Error("Could not fetch weather data");
        }


    }catch(error){
        displayError(error);
    }
}



searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    checkWeather();
});

function displayError(message){
    const error = document.createElement("h2");
    error.textContent = message
    error.classList.add("error");
    weather.style.display = "block"; 
    weather.appendChild(error);

}
