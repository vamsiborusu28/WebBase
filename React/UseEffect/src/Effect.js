




function Effect({myname,list,details}){  
    // useEffect(callback,dependencyList)
    
   
    return(
        <>
        <p>{myname}</p>
        <ul>
        {list.map((l) => (<li key={l}>{l}</li>))}
        </ul>
        <h1>{details.gender} {details.name?.first} {details.name?.last}</h1>
        
        </>
    );
}


export default Effect;