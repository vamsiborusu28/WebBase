import {useNavigate} from 'react-router-dom';

function NavBar(){

    const navigate=useNavigate();
    const navStyles={
        display:"flex",
        justifyContent:"space-around",
        // alignItems:"center",
        marginTop:"0px",
        marginBottom:"5vh",
        // position:"fixed",
        gap:"40vw",

        // top:"5%"
        // top:"-7vh"
    }
    const navmenuStyles={
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"2vw"
    }
    return(
        <>
        <section style={navStyles}>
            <div style={{width:"12vw",height:"12vh"}}>
                <img src="https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png" style={{width:"100%",height:"100%"}}></img>
            </div>
            <nav style={navmenuStyles}>
                <button onClick={(event ) => {
                    // navigate("/home");
                }}>
                    Home
                </button>
                <button onClick={(event ) => {
                    navigate("/register");
                }}>
                    Register
                </button>
            </nav>
        </section>
        </>
    )
}

export default NavBar;