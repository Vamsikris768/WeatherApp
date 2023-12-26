const apiKey="5e9f510f7e2784ad5fff6f15dbb96bd3"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`)
    if(response.status===404){
        document.querySelector('.error').style.display='block'
        document.querySelector('.weather').style.display='none'
    }
    else{
        var data=await response.json()
        console.log(data)


        let cityName=document.querySelector('.city')
        cityName.innerHTML=data.name

        let temperature=document.querySelector('.temp')
        temperature.innerHTML=data.main.temp.toFixed(1)+'°C'

        let humidity=document.querySelector('.humidity')
        humidity.innerHTML=data.main.humidity+'%'

        let windSpeed=document.querySelector('.wind')
        windSpeed.innerHTML=data.wind.speed+'km/hr'

        let image=document.querySelector('.weather-icon')
    // console.log(image.src)
        if(data.weather[0].main==='Clear'){
            image.src='./images/clear.png'
        }
        else if(data.weather[0].main==='Clouds'){
            image.src='./images/clouds.png'
        }
        else if(data.weather[0].main==='Drizzle'){
            image.src='./images/drizzle.png'
        }
        else if(data.weather[0].main==='Mist'){
            image.src='./images/mist.png'
        }
        else if(data.weather[0].main==='Rain'){
            image.src='./images/rain.png'
        }
        else if(data.weather[0].main==='Snow'){
            image.src='./images/snow.png'
        }

        document.querySelector('.weather').style.display='block'
        document.querySelector('.error').style.display='none'



    }
    

}

let input=document.querySelector('input')
let searchBtn=document.querySelector('button')
searchBtn.addEventListener('click',()=>{
    checkWeather(input.value)
})

let image=document.querySelector('.weather-icon')
// console.log(image.src)


//hyd germany  secunderabad
