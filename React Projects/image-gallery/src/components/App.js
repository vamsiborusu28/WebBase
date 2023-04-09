import { useEffect, useState } from "react";

import ImageCard from "./ImageCard";
import ImageSearch from "./ImageSearch";

function App(){
    const [image,setImages]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [term,setTerm]=useState('');

    useEffect(()=> {
        fetch(`https://pixabay.com/api/?key=34706238-3cfd62eeeeb52a6a14f7c5aff&q=${term}&image_type=photo&pretty=true`).then(Response => Response.json()).then(
            data => {
                setImages(data.hits);
                setLoading(false);
            }
        ).catch(error => {
            console.error(error);
        })
    },[term]);
    return(
        <>
        <div className="container m-auto">
            <ImageSearch searchText={text => setTerm(text)}></ImageSearch>
                {!isLoading && image.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">No Images Found</h1> }

                { isLoading ? <h1>Loading.....</h1> :
                    <div className="grid grid-cols-2 md:grid-cols-3 items-center justify-center px-6 py-4 gap-7">{
                    image.map((element,index) => (
                       
                        <ImageCard image={element} key={element.ids}></ImageCard>
                    ))}
                </div>}
        </div>
       
        </>
    )
}

export default App;