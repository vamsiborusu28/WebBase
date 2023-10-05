import { useState } from "react";
import { useNavigate } from "react-router-dom";




function Skills(){


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
    const [skill,setSkill]=useState('');
    const [proficiency,setProficiency]=useState(0);
    const [skillList,setSkillsList]=useState([]);



    // Add Skill Method
    function AddSkill(event){
        event.preventDefault();
        console.log(skill,proficiency);
        console.log(typeof(skill),typeof(proficiency));
        setSkillsList([...skillList,{name:skill,level:proficiency}]);

    }


    // save skills 
    function saveSkills(event){
        event.preventDefault();
        navigate("/education");

    }
    return(
        <>
        <h3>Skills Section</h3>
        <form  style={inputDashboard} onSubmit={AddSkill}>
            <h2>Skills Input Section</h2>
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:'center',
                gap:"2vw",
                // marginTop:"2vh"
            }}>
            <label style={{
                fontSize:"20px",

            }}>SKill Name</label> 
            <input type="text" placeholder="Enter Skill Name" style={{
                backgroundColor:"white",
                padding:"2vh 4vw",
                border:"2px solid black",
                color:'black',
                fontSize:'16px',
                width:"12vw"
            }} required onChange={event => setSkill(event.target.value)}></input>
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

            }}>SKill Level</label> 

            <input type="text" placeholder="Example 1 - 5" style={{
                backgroundColor:"white",
                padding:"2vh 4vw",
                width:"12vw",
                border:"2px solid black",
                color:'black',
                fontSize:'16px'
            }} required onChange={event => setProficiency(+event.target.value)}></input>
            </div>

            <button > Add Skill </button>
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
                skillList.map((skill,index) => {
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


        <button onClick={saveSkills}>Proceed & Next</button>
        </>
    )
}




export default Skills;