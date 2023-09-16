const apiKey="9595d4df277b14d372517965f81762d3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";/*units=metric to convert to  celcius use q to add city name*/
const searchBox = document.getElementById("inp");
const button = document.getElementById("btn"); /*when click on this src btn it shld send the search input value to the checkweather funct */
const weatherIcon=document.querySelector(".weather-icon");
async function check(city){
    console.log(city)
    const response= await fetch(apiUrl +city +`&appid=${apiKey}`);/*here there is api url and apikey and location */
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
      
    }else{

    var data = await response.json();/*this data will have all the information about the weather of the city */
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;/*it target the element with class city and update it */
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";/*to convert to int*/
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed +" mph";
    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}
}
button.addEventListener("click",()=>{
    check(document.querySelector(".search input").value);                /*when the user click the search icon the city name entered in the search box is passed as argument to the checkwether function  */
})                                                                    /*when the user click the search icon the city name entered in the search box is passed as argument to the checkwether function  */

