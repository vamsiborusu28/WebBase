import {Card} from '@mui/material';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import CustomExperience from './customexperience';
function Experience(){

    const navigate=useNavigate();
    const [companies,setCompanies]=useState([]);
    console.log(companies.length);
    return(
        <>
            
            <Card style={{
            display:'flex',
            position:'relative',
            justifyContent:"center",
            alignItems:'center',
            flexDirection:"column",
            backgroundColor:'#242424',
            border:'transparent',
            // boxShadow:'0 0 2px black',
            // gridTemplateColumns:"1fr 1fr",
            // justifyContent:'center',
            // alignItems:"center",
            width:'60vw',
            // height:'100vh',
            // overflow:'scroll',
            margin:"0 18vw"
        }}>

            <CustomExperience row={1}></CustomExperience>

            {
                companies.map((company,index) => {

                return(
                <CustomExperience key={index}></CustomExperience>
                );
                })
            }


            <button onClick={event => {
                     event.preventDefault();
                    if(companies.length===4){
                     return;
                    }
                    setCompanies([...companies,companies.length+1]);
        
             }} style={{
                position:"absolute",
                bottom:'1vh',
                right:'1vh',
                zIndex:'100',
            }}>
            Add Experience 
        </button>
        </Card>
        <button style={{
            marginTop:"3vh"
        }}
        onClick={event => {
            navigate("/languages");
        }}>Proceed &  Next</button>
        </>
    )
    
}


export default Experience;