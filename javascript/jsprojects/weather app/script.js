
// Weather App using Fetch API


// selecting input city element

const city=document.querySelector('#inputBox');
const tbody=document.querySelector('tbody');
let cityCount=0;
//selecting output labels element

const country=document.querySelector('#countryName');
const state=document.querySelector('#stateName');
const cityName=document.querySelector('#cityName');
const humidity=document.querySelector('#humidity');
const windSpeed=document.querySelector('#windSpeed');
const temparature=document.querySelector('#temprature');
const logo=document.querySelector('#logoImage');
const weatherStatus=document.querySelector('#weatherStatus');



const updateWeatherTable =(weatherinfo) =>{
  cityCount++;
  const tablerow=document.createElement('tr');
  tablerow.style.fontWeight='600';
  tablerow.style.fontSize='14px';
  tablerow.style.color='#e11d48';
  for(const key in weatherinfo){
    const td=document.createElement('td');
    if(key=== 'logo'){
      const img=document.createElement('img');
      img.src=weatherinfo[key];
      img.style.width='50px';
      td.appendChild(img);
    }
    else{
      td.innerText=weatherinfo[key];
    }
    tablerow.appendChild(td);
  }
  if(cityCount%2===0){
    tablerow.style.color='#0284c7';
  }
  tbody.appendChild(tablerow);
}


const getData=async function(event){
  event.preventDefault();
  console.log(city.value);
  if(!city.value){
    alert('Please enter city name');
     return;
  }
  const url=`http://api.weatherapi.com/v1/current.json?key=f8a76fc70f5541e3a18114149231402&q=${city.value}`;
  const fetchData=await fetch(url); // fetchData is not a function it gives raw data its type is response
  //console.log(fetchData);

  //const cityData=await fetchData.then((response) => response.json());
  const cityData=await fetchData.json();
  console.log(cityData);

  const currentData=cityData.current;
  const locationData=cityData.location;


  // Creating table object for table element
  const weatherinfo={};
  // Assigning the values to the labels

  // location Data labels country ,name ,region
  weatherinfo['city']=cityName.innerText=locationData.name;
  weatherinfo['country']=country.innerText=locationData.country;
  weatherinfo['state']= state.innerText=locationData.region;
  

  // current Data Labels condition -> icon,text humidity temp_c wind_kph 
  weatherinfo['humidity']=humidity.innerText=currentData.humidity;
  weatherinfo['windspped']=windSpeed.innerText=currentData.wind_kph;
  weatherinfo['temparture']= temparature.innerText=currentData.temp_c;
  

  weatherinfo['logo']=logo.src=currentData.condition.icon;
  logo.style.width='60px';
  weatherinfo['status']=weatherStatus.innerText=currentData.condition.text;

 // Calling update Table Method;
 updateWeatherTable(weatherinfo);

};
