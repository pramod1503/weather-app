const apiKey = "f50f157e21d97cc613353d861c11d036"
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
        const searchBox = document.querySelector("#search input")
        const searchButton = document.querySelector("#search button")
        async function checkweather(city) {
            const response = await fetch(apiUrl+city+`&appid=${apiKey}`)
            if(response.status==404){
                document.querySelector("#error").classList.remove('hidden')
                document.querySelector('#weather').classList.add('hidden')

            }
            else{
                
                let data = await response.json()
            
                document.querySelector("#city").innerHTML = data.name;
                document.querySelector("#temp").innerHTML = Math.round(data.main.temp)+"°C";
                document.querySelector("#humidity").innerHTML = data.main.humidity+"%"
                document.querySelector("#wind").innerHTML = data.wind.speed+" km/h"
                
                if(data.weather[0].main == 'Clear'){
                    weatherIcon.src = "./images/clear.jpg"
                }
                else if(data.weather[0].main == 'Clouds'){
                    weatherIcon.src = "./images/cloud.jpg"
                }
                else if(data.weather[0].main == 'Rain'){
                    weatherIcon.src = "./images/rain.png"
                }
                else if(data.weather[0].main == 'Drizzle'){
                    weatherIcon.src = "./images/drizzle.png"
                }
                else if(data.weather[0].main == 'Mist'){
                    weatherIcon.src = "./images/mist.png"
                }
                document.querySelector("#error").classList.add('hidden')
                document.querySelector('#weather').classList.remove('hidden')
            }
        }
        searchButton.addEventListener('click',()=>{
            checkweather(searchBox.value)
        })