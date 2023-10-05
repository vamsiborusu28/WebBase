import { useState } from "react";



const Form=function(){
    const [formData,setformData]=useState({
        name:'vamsi',
        age:23,
        email:'vamsi@gmail.com'
    });
    
    const formStyles={
        display:'flex',
        alignItems:'center',
        justifyContent:'cener',
        gap:'10px',
        border:'2px solid black',
        flexDirection:'column',
        marginTop:'2vh',
        padding:'1vh 2vw'

    }
    const handleChange=function(event){
        event.preventDefault();
        console.log(event.target);
        const {name,value,type}=event.target;

        if(type==='number'){
            setformData(prevState => {
                return{
                    ...prevState,
                    [name]:parseInt(value)
                }
            });
            return;
        }
        setformData(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        });
        event.target.value='';
        // event.target.styles.disabled=true;
        // console.log(formData);

    }

    const formSubmit=function(event){
        event.preventDefault();
        console.log(event.target);
        console.log(formData);
        // event.target.style.disabled=true;
    }

    return(
        <>

            <form onSubmit={formSubmit} style={formStyles}>
                <input type="text" name="name" value={formData.name} placeholder="Enter Name" onChange={handleChange} required></input>
                <input type="number" name="age" value={formData.age} placeholder="Enter Name" onChange={handleChange} required></input>
                <input type="email" name="email" value={formData.email} placeholder="Enter Name" onChange={handleChange} required></input>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


export default Form;