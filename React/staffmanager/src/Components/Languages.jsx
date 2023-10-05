import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {languageTypes} from '../DataFiles/LanguageTypes'



function Languages(){


    const navigate=useNavigate();
    // skill inputDashboard styles
    const inputDashboard={
        width:"50vw",
        backgroundColor:"#f5f5f5",
        height:"40vh",
        margin:"0 22%",
        border:'1px solid black',
        color:"black",
        display:'flex',
        flexDirection:"column",
        alignItems:'center',
        gap:'1.5vh'
        // justifyContent:'center'

    }


    // use States
    const [language,setLanguage]=useState('');
    const [proficiency,setProficiency]=useState('');
    const [languageList,setLanguageList]=useState([
        {
            name:"English",
            level:'Intermediate'
        }
    ]);



    // Add Skill Method
    function AddLanguage(event){
        event.preventDefault();
        if(language==='' || proficiency===''){
            alert("Language Fields Should not be empty");
            return;
        }
        console.log(language,proficiency);
        console.log(typeof(language),typeof(proficiency));
        setLanguageList([...languageList,{name:language,level:proficiency}]);

    }


    // save skills 
    function saveLanguages(event){
        event.preventDefault();
        navigate("/projectdetails");

    }
    return(
        <>
        <h3>Languages Known</h3>
        <form onSubmit={AddLanguage} style={inputDashboard}>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:'center',

                gap:"2vw",
                marginTop:"4vh"
            }}>

            <label style={{
                fontSize:"20px",

            }}>Language </label> 
            <input type="text" placeholder="Enter Language Name" style={{
                backgroundColor:"white",
                padding:"2vh 4vw",
                border:"2px solid black",
                color:'black',
                fontSize:'16px',
                width:"12vw"
            }} required onChange={event => setLanguage(event.target.value)}></input>
            
            </div>
            

            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:'center',
                gap:"2vw",
                marginTop:"2vh"
            }}>
            <label style={{
                fontSize:"20px",

            }}>Proficieny  Level</label> 

            <select value={proficiency} onChange={event => setProficiency(event.target.value)} style={{
                        width:"20vw",
                        padding:"2vh 4vw",
                        height:"7vh",
                        backgroundColor:"white",
                        color:'black',
                        fontSize:'16px',
                        borderRadius:"3px"
                    }} required>
                        {
                            languageTypes.map((type) => {
                                return(
                                    <>
                                    <option value={type}>{type}</option>
                                    </>
                                )
                            })
                        }
                    </select>
            </div>

            <button > Add Language </button>
        </form>

        {/* // skills dashboard */}
        <section>

            <div style={{
                
                width:"50vw",
                margin:"5vh  22%",
                display:"grid",
                gridTemplateColumns:'1fr 1fr 1fr',
                alignItems:"center",
                justifyContent:"center",
                gap:"2vw "
            }}>

                {
                languageList.map((skill,index) => {
                    return (
                        <div style={{
                            backgroundColor: index%2===0  ? 'green': 'black',
                            width:'10vw',
                            borderRadius:"10px",
                            padding:"1vh 4vw",
                            color:'white',
                        }} key={index}>
                            <label>{skill.name}- {skill.level}</label>
                        </div>    
                    )
                })
                }
            </div>
        </section>


        <button onClick={saveLanguages}>Proceed & Next</button>
        </>
    )
}

export default Languages;