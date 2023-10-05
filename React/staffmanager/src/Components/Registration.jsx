
import './Styling/registration.css';
import {Card,TextField} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Registration(){


    const navigate=useNavigate();
    // use states
    const  [empName,setEmpName]=useState('');
    const [empId,setEmpId]=useState('');
    const [empEmail,setEmpEmail]=useState('');
    const [mgrName,setMgrName]=useState('');
    const [mgrId,setMgrId]=useState('');
    const [mgrEmail,setMgrEmail]=useState('');
    const [gbl,setGbl]=useState('');


    const cardStyles={
        width:"40vw",
        // height:"100vh",
        marginTop:"15vh",
        marginLeft:"20%",
        border:"1px solid black",
        // color:"white",
        padding:"2vh 5vw",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:'3vh',
        backgroundColor: '#f5f5f5'
    }

    function addTest(event){
        event.preventDefault();
        // navigate("/test");
        const empData={
            empId,
            empName,
            empEmail,
            mgrId,
            mgrName,
            mgrEmail,
            gbl
        }

        console.log(empData);
        setEmpId('');
        setEmpEmail('');
        setEmpName('');
        setGbl('');
        setMgrEmail('');
        setMgrId('');
        setMgrName('');

        navigate("/skills");

        
    }

    function clearPage(event){
        event.preventDefault();
        
        setEmpId('');
        setEmpEmail('');
        setEmpName('');
        setGbl('');
        setMgrEmail('');
        setMgrId('');
        setMgrName('');

        const form=document.querySelector('form');
        let childNodes=form.childNodes;
        childNodes.forEach((child) => {
            if(child.classList.contains('MuiFormControl-root')){
                // child.event.target.value="";
                console.log(child.innerText);
                // child.innerText="";

            }
        })

    }
    return(
        <>
        <Card style={cardStyles}>
            <h2 style={{textAlign:'center'}}> Employee Registration Form</h2>

            <TextField variant='outlined' label=" Employee Name" fullWidth placeholder='Enter Employee Name' className='dark' onChange={(event) =>{ 
                setEmpName(event.target.value)
                // event.target.value="";
            }}>
                
            </TextField>

            <TextField variant='outlined' label=" Employee ID" fullWidth placeholder='Ex: 20422340' onChange={(event) => {
                setEmpId(event.target.value);
                // event.target.value="";
            }}>

            </TextField>

            <TextField variant='outlined' label=" Employee Email" fullWidth placeholder='alex.john@wipro.com' onChange={(event) => setEmpEmail(event.target.value)}>

            </TextField>
            <TextField variant='outlined' label=" Manager Name" fullWidth placeholder='Enter Manager Name' onChange={(event) => setMgrName(event.target.value)}>

            </TextField>
            <TextField variant='outlined' label=" Manager ID" fullWidth placeholder='Ex: 20422340'
             onChange={(event) => setMgrId(event.target.value)}>

            </TextField>
            <TextField variant='outlined' label=" Manager Email" fullWidth placeholder='alex.john@wipro.com' onChange={(event) => setMgrEmail(event.target.value)}>

            </TextField>
            <TextField variant='outlined' label="Global Business Line" fullWidth placeholder='Example: fsc-digital' onChange={(event) => setGbl(event.target.value)}>

            </TextField>

            <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:'5vw'}}>
            {/* <button onClick={clearPage}>Clear</button> */}
            <button onClick={addTest}>Next</button>
            </div>
        </Card>
        </>
    )
}


export default Registration;