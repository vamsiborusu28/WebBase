

const submitBtn=document.querySelector('button');
const input=document.querySelector('.countryinput');
const grid=document.querySelector('.countrygrid');
const searchBar=document.querySelector('.country');
const label=document.querySelector('label');

const totalEarthLandSurface=148326000;
const totalEarthSurface=509600000;


const updateCountry=function(countryData){
    const div=document.createElement('div');

    div.className='countrydetails';


    // Img Element
    const img=document.createElement('img');
    img.src=countryData.flags.png;

    img.style.width='90px';

    div.appendChild(img)

    // Paragraph ELements

    //1
    const para1=document.createElement('p');
    para1.innerText =`Country Name: ${countryData.name}`;
    para1.style.textAlign='center';
    div.appendChild(para1);

    //2
    const para2=document.createElement('p');
    para2.innerText =`Country Capital: ${countryData.capital}`;
    div.appendChild(para2);
    //3
    const para3=document.createElement('p');
    para3.innerText =`Currency: ${countryData.currencies[0].name}`;
    div.appendChild(para3);
    //4
    const para4=document.createElement('p');
    para4.innerText =`Code: ${countryData.currencies[0].code}`;
    div.appendChild(para4);

    //5
    const para5=document.createElement('p');
    para5.innerText =`Native Name: ${countryData.nativeName}`;
    div.appendChild(para5);

    //6
    const para6=document.createElement('p');
    para6.innerText =`Population: ${Math.round((countryData.population/10000000))}Crores`;
    div.appendChild(para6);

    

    //7
    const para7=document.createElement('p');
    para7.innerText =`Region: ${countryData.region}`;
    div.appendChild(para7);

    //8
    const para8=document.createElement('p');
    para8.innerText=`Area :${countryData.area} sq.km`;
    div.appendChild(para8);
    const area=parseInt(countryData.area);
    console.log(area);
    const percentland= (area/totalEarthLandSurface)*100;
    const percentEarth=(area/totalEarthSurface)*100;

    //para9
    const para9=document.createElement('p');
    para9.innerText=`% of Land w.r.t earth land surface ${percentland.toFixed(4)}`;
    para9.style.textAlign='center';
    div.appendChild(para9);


    //para10
    const para10=document.createElement('p');
    para10.innerText=`% of Land w.r.t earth Total surface ${percentEarth.toFixed(4)}`;
    para10.style.textAlign='center';
    div.appendChild(para10);


    grid.appendChild(div);


}


const getCountry= async function(event){
    event.preventDefault();
    if(input.value===''){
        alert('Enter Country Name');
        return;
    }
    let url=`https://restcountries.com/v2/name/${input.value}?fullText=true`;
    const response= await fetch(url);
    const country=await response.json();
    console.log(country);
    if(country.status===404){
        alert('Please Enter Valid Country Name');
        return;
    }
    const countrydata=new Object(country);
    console.log(countrydata[0]);
    updateCountry(countrydata[0]);
    //countryInfo['name']=countrydata.name;
    //countryInfo['capital']=countrydata.capital;
    //countryInfo['currency']=countrydata.currencies;
    // countryInfo.code=countrydata.currencies[0].code;
    // countryInfo.flag=countrydata.flags[png];

    // console.log(`
    // Name : ${countryInfo.name}\n
    // Capital : ${countrydata.capital}\n
    // `);
    // console.log(countryInfo);


}
// Intersection Observer API
const callback=function(entries,observer){
    const [entry]=entries;
    console.log(entry);
    if(entry.isIntersecting===false){
        searchBar.style.position='fixed';
        label.style.color='#120E43';
    }
    else if(entry.isIntersecting){
        searchBar.style.position='flex';
    }
}
const observer=new IntersectionObserver(callback,{
    root:null,
    threshold:0,
    rootMargin:'30px'
})

observer.observe(searchBar);
submitBtn.addEventListener('click',getCountry)