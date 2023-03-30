
import {useState} from 'react';

// import Instructions from './Instructions';
function Main(props){
    

    return (
        <div className="flex flex-col justify-center items-center gap-[20px] bg-black text-white pb-[10px] mb-[10px]">
        <main className="flex justify-center items-center  gap-[100px] mt-[5vh]  px-[20px] py-[20px]">
            <div >
                <h1 className='text-2xl font-bold text-red-700'>{props.receipe.strMeal}</h1>
                <img src={props.receipe.strMealThumb} className='w-[400px] rounded-xl'></img>
            </div>
            {/*  Section Containing Ingredients */}

            <div >
                <h3 className='text-2xl font-bold text-red-700 mb-[10px] mb-[10px]'>{props.receipe.strMeal+'  Ingredients'}</h3>
                <ol className="text-red border-2 border-solid w-[25vw]  flex flex-col justify-center text-center gap-[2px] rounded-lg items-center text-sm">
                   {/* {Object.keys(props.receipe).forEach(
                    (key) =>{
                        if(key.includes('strIngredient') && props.receipe[key]!==null){
                            console.log(`Sucess`,key);
                           
                        }
                        return  <li>vamsi</li>
                    }
                   )} */}
                   {
                    Object.keys(props.receipe).map((keys) =>{
                        if(keys.includes('strIngredient') && props.receipe[keys]!=='')
                        return <><li key={keys} className="text-white list-decimal m-0 p-0">{props.receipe[keys]}</li><br className='bg-white'/></>
                    })
                   }
                </ol>
            </div>
        </main>
        <section>
            <h1 className="text-center text-2xl font-bold">Instructions</h1>
            <p className="w-[80vw] text-justify mx-[10vw] text-red-500 text-md">{props.receipe.strInstructions}</p>
            {/* <Instructions data={props.receipe.strInstructions}/> */}
            
            
        </section>
        {/* <iframe width='500' height='300' src={props.source} className='border-1 border-solid'>
        </iframe> */}
        <div> 
            {/* <iframe width="560" height="315" src={props.source} title="YouTube video player"  allowfullscreen>
            </iframe> */}
           
           <button className="bg-black text-red-500 px-[10px] py-2 border-2 border-solid border-white rounded-lg">
            <a href={props.source}>Link To Video</a>
            </button>
        </div>
        
        </div>
    );
}

export default Main;