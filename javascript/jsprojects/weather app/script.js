// Get Data from API

let cityCount=0;


// select input and output elements using dom

const city=document.querySelector('#inputBox');
const table=document.querySelector('tbody');


// Output Labels

const countryName=document.querySelector('#countryName');
const stateName=document.querySelector('#stateName');
const cityName=document.querySelector('#cityName');
const humidity=document.querySelector('#humidity');
const windSpeed=document.querySelector('#windSpeed');
const temparature=document.querySelector('#temprature');
const logoImage=document.querySelector('#logoImage');
const weatherStatus=document.querySelector('#weatherStatus');



const updateWeatherTable = function(weatherObj){
  // weatherInfo.forEach((element)=>{
  //   const tr=document.createElement('tr');
  //   for(const key in element){
  //     const td=document.createElement('td');
  //     td.innerText=element[key];
  //     tr.appendChild(td);
  //   }
  //   table.appendChild(tr);
  // });
  cityCount++;
  const tr=document.createElement('tr');
  for(const key in weatherObj){
    const td=document.createElement('td');
    // if(key==='Logo'){
    //   const img=document.createElement('img');
    //   img.src=weatherObj[key];
    //   td.appendChild(img);
    // }
    
    if(key=='Logo'){
      // console.log(key);
      const img=document.createElement('img');
      img.src=weatherObj[key];
      td.appendChild(img);
      tr.appendChild(td);
    }
    else{
      td.innerText=weatherObj[key];
      tr.appendChild(td);
    
    }
    
  }
  table.appendChild(tr);
  if(cityCount%2!==0){
    tr.style.color='#22CB5C';
  }


}

const printWeather=function(){
  weatherInfo.forEach((ele) =>{
    console.log(ele);
  })
  console.log('\n');
}

const getData= async function(event){
  event.preventDefault();
  console.log(city.value);
  if(!city.value) {
    alert('Please Enter City Name');
    return;
  }
  const url=`http://api.weatherapi.com/v1/current.json?key=f8a76fc70f5541e3a18114149231402&q=${city.value}`;

  const fetchData= await fetch(url);
  const orgData= await fetchData.json();
  // console.log(data);
  //const orgData=fetchData.then((response) => response.json());
  console.log(orgData);
  const currentData=orgData.current;
  const locationData=orgData.location;
  console.log(currentData,locationData);
  //Upper Row Data
  countryName.innerText=locationData.country;
  stateName.innerText=locationData.region;
  cityName.innerText=locationData.name;
  
  //Lower Row Data
  humidity.textContent=currentData.humidity;
  windSpeed.innerText=currentData.wind_kph;
  temparature.textContent=currentData.temp_c;


  //Logo Change
  logoImage.src=currentData['condition'].icon;
  weatherStatus.innerText=currentData.condition.text;
  
  const WeatherObj={
    Country:countryName.innerText,
    City:cityName.innerText,
    State:stateName.innerText,
    Humidity:humidity.innerText,
    WindSpeed:windSpeed.innerText,
    Temparature:temparature.innerText,
    Logo:logoImage.src,
    weatherStatus:weatherStatus.innerText
    
  }

  //weatherInfo.push(WeatherObj);
  updateWeatherTable(WeatherObj);
  //printWeather()
}

const changeBackground=function(){
  let str="#";
  for(let i=0;i<6;i++){
    const x=Math.trunc((Math.random()*10));
    str+=x;
  }
  document.body.style.backgroundColor=str;

}
// setInterval(changeBackground,100);






