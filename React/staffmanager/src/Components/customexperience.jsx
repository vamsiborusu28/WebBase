
import {TextField} from '@mui/material';


function CustomExperience({row}){


    const deleteCard=function(event){
        event.preventDefault();
        const card=event.target.parentNode.parentNode;
        card.remove();
    }

    const addCompany=function(event){
        event.preventDefault();
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
                // boxShadow:'0 0 16px #f5f5f3'

        }} onSubmit={addCompany}>
            <label style={{ 
                        fontSize:"16px",
                        textAlign:'justify',
                        backgroundColor:'green',
                        width:'10vw',
                        padding:'0 1vw',
                        color:'whitesmoke'
                    }}>Company</label>
            <TextField variant="outlined" fullWidth label="Company Name" placeholder="Enter Company Name" required></TextField>
            <TextField variant="outlined" fullWidth label="Role" placeholder="Ex: Software Developer" required></TextField>
            <TextField variant="outlined" fullWidth label="Years" placeholder="Ex : 2" required></TextField>
            <div style={{display:"flex",justifyContent:'center',alignItems:'center',gap:'3vw'}}>
                <button style={{backgroundColor:'green'}}>Submit</button>
            {
              row!==1 &&  <button style={{backgroundColor:'red'}}
              onClick={deleteCard}>Delete</button>
            }
    
        </div>
        </form>
        </>
    )
}


CustomExperience.defaultProps={
    row:-1,
}

export default CustomExperience;