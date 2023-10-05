import {states} from '../DataFiles/states';
import { educationtypes } from '../DataFiles/EducationTypes';
import {useState} from 'react';

import {TextField} from '@mui/material';

function CustomEducation({row}){
    const [state,setState]=useState("Telangana");
    const [eduTypes,setEduTypes]=useState("School");


    // submit course
    function addCourse(event){
        event.preventDefault();
        
    }
    function deleteCard(event){
        event.preventDefault();
        const card=event.target.parentNode.parentNode;
        card.remove();
    }
    return(
        <>
        
        <form style={{
                width:"30vw",
                margin:"5% 4vw",
                border:'2px solid black',
                backgroundColor:"#f5f5f3",
                display:"flex",
                flexDirection:'column',
                justifyContent:'center',
                // alignItems:"center",
                gap:"2vh",
                padding:"2vh 2vw",
                color:"black",
                borderRadius:"20px",
                boxShadow:'0 0 16px #f5f5f3'

                }} onSubmit={addCourse}>
                    <label style={{ 
                        fontSize:"16px",
                        textAlign:'justify',
                        backgroundColor:'green',
                        width:'10vw',
                        padding:'0 1vw',
                        color:'whitesmoke'
                    }}>Type of Education</label>

                    <select value={eduTypes} onChange={event => setEduTypes(event.target.value)} style={{
                        width:"100%",
                        height:"7vh",
                        backgroundColor:"white",
                        color:'black',
                        fontSize:'16px',
                        borderRadius:"3px"
                    }} required>
                        {
                            educationtypes.map((type) => {
                                return(
                                    <>
                                    <option value={type}>{type}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                    <TextField variant="outlined" fullWidth label="Institute Name" placeholder="Enter Institute Name" required></TextField>
                    <TextField variant="outlined" fullWidth label="Course Name" placeholder="Enter Institute Name" required></TextField>
                    <TextField variant="outlined" fullWidth label="Grade" placeholder="Enter Grade" required></TextField>
                    <TextField variant="outlined" fullWidth label="Medium Of Instruction" placeholder="Ex: Telugu, Hindi etc.." required></TextField>
                    <TextField variant="outlined" fullWidth label="Country" placeholder="Ex:India" required></TextField>
                     {/* State Selection */}
                     <label style={{
                        fontSize:"16px",
                        textAlign:'justify',
                        backgroundColor:'red',
                        width:'10vw',
                        padding:'0 1vw',
                        color:'whitesmoke'
                    }}>State</label>
                    <select value={state} onChange={event => setState(event.target.value)} style={{
                        width:"100%",
                        height:"7vh",
                        backgroundColor:"white",
                        color:'black',
                        fontSize:'16px',
                        borderRadius:"3px"
                        // padding:"1vh 2vw"
                    }} required>
                        {
                            states.map((state) => {
                                return(
                                    <>
                                    <option value={state}>{state}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                    <TextField variant="outlined" fullWidth label="place" placeholder="Ex: Bhimavaram" required></TextField>

                    {/* // start and End Date */}
                    <div style={{display:"flex",gap:"2vw",alignItems:'center'}}> 
                    <label><strong>Start Date</strong></label>
                    <input type="date" style={{height:"4vh",width:'20vw'}} required></input>
                    </div>
                    
                    <div style={{display:"flex",gap:"2vw",alignItems:'center'}}> 
                    <label><strong>End Date</strong></label>
                    <input type="date" style={{height:"4vh",width:'20vw'}} required></input>
                    </div>
                    <div style={{display:"flex",justifyContent:'center',alignItems:'center',gap:'3vw'}}>
                    <button style={{backgroundColor:'green'}} >Submit</button>
                    {
                     row!==-1  &&   <button style={{backgroundColor:'red'}}
                    onClick={deleteCard}>Delete</button>
                    }
                    </div>
                    
            </form>

        </>
    )
}

CustomEducation.defaultProps={
    row:1
}


export default CustomEducation;