import {useState} from 'react';
import Main from './Main'

function Search(){
    const [receipeInfo ,setReceipeInfo]=useState({});
    const [sourceVideo,setSource]=useState('');
    const getReceipe=async (event) => {
        event.preventDefault();
        const receipeName=document.querySelector('form>input');
        if(receipeName.value===''){
            alert('Please Enter Receipe Name');
        }

        const receipeResponse=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${receipeName.value}`);
        console.log(receipeResponse);
        if(receipeResponse.status>400){
            alert('Receipe Not Found');
        }

        const receipeData=await receipeResponse.json();
        console.log(receipeData);
        console.log(receipeData.meals[0]);
        if(receipeData.meals===undefined) alert('Enter Valid Receipe');
        setReceipeInfo(receipeData.meals[0]);
        const receipeInfo=receipeData.meals[0];
        const source=receipeInfo.strYoutube.replace('watch','v');
        console.log(source);
        setSource(source);
        Object.keys(receipeInfo).forEach((key) => {
            if(key.includes('strIngredient') && receipeInfo[key]!==null){
            console.log(key,receipeInfo[key]);
            }
        })
        
    }


    return(
        <>
        <form className="my-[20px] flex justify-center items-center gap-5 ">
            <input type='text' placeholder="Enter Receipe Name" className="border-[3px] border-solid border-black p-[3px]"></input>
            <button className="bg-red-600 px-[8px] py-[5px] text-white" onClick={getReceipe}>Search</button>
        </form>
        <Main receipe={receipeInfo} source={sourceVideo}></Main>
        </>
    );
}

export default Search;