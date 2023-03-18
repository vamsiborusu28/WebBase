import { useContext } from "react";
import { myContext } from "./App";



function UserDetails(){

    const data =useContext(myContext);
    return(
        <>
        <h1>{data.name}</h1>
        <div style={{width:'200px',height:'200px',backgroundColor:`${data.color}`}}></div>
        </>
    );
}
export default UserDetails;