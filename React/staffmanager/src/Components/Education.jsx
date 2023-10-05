import { TextField,Card,Select,MenuItem} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import CustomEducation from "./cutomEdu";
function Education(){

    // create a navigate hook
    const navigate=useNavigate();

    // useState ELements
    const [courses,setCourses]=useState([]);
    // console.log(schoolState);
    console.log(courses);

    return (
        <>
            <h2>Education Section</h2>

        <Card style={{
            display:'flex',
            position:'relative',
            justifyContent:"center",
            alignItems:'center',
            flexDirection:"column",
            // gridTemplateColumns:"1fr 1fr",
            // justifyContent:'center',
            // alignItems:"center",
            width:'60vw',
            // height:'100vh',
            // overflow:'scroll',
            margin:"0 18vw"
        }}>
            <CustomEducation row={-1}></CustomEducation>
            {
                 
                courses.map(course => {
                    return(
                        <CustomEducation key={course}></CustomEducation>
                    )
                })
            }
            

            <button onClick={event => {
            event.preventDefault();
            if(courses.length===4){
                return;
            }
            setCourses([...courses,courses.length+1]);
        
        }} style={{
            position:"absolute",
            bottom:'1vh',
            right:'1vh',
            zIndex:'100',
        }}>
            Add Education 
        </button>
        </Card>

        
        <button style={{
            marginTop:"3vh"
        }}
        onClick={event => {
            navigate("/experience");
        }}>Proceed &  Next</button>
        </>
    );

}


export default Education;