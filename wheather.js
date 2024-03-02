const apiKey="1d71a7ac48136f1ac84859b8c14f6e21";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searcBox=document.querySelector(".search input");
const searcBtn=document.querySelector(".search button");
const wheatherIcon=document.querySelector(".wheather-icon")

        async function checkWheather(city){
            const response=await fetch(apiUrl + city + `&appid=${apiKey}`);

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".wheather").style.display = "none";
            }
            else{
                var data=await response.json();

            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

            if(data.weather[0].main=="Clouds"){
                wheatherIcon.src="img/clouds.png"
            }
            else if(data.weather[0].main=="Clear"){
                wheatherIcon.src="img/clear.png"
            }
            else if(data.weather[0].main=="Rain"){
                wheatherIcon.src="img/rain.png"
            }
            else if(data.weather[0].main=="Drizzle"){
                wheatherIcon.src="img/drizzle.png"
            }
            else if(data.weather[0].main=="Mist"){
                wheatherIcon.src="img/mist.png"
            }

            document.querySelector(".wheather").style.display="block";
            document.querySelector(".error").style.display = "none";

            }
            
        }
        searcBtn.addEventListener("click", ()=>{
            checkWheather(searcBox.value);
        })