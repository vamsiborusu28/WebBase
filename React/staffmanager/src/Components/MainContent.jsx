

function Home(){

    const homeStyles={
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:"2% 5%",
        flexWrap:"wrap",
        boxShadow:'0 0 2px black', 
        padding:"2% 2%",
        borderRadius:"10px"
    }
    return(
        <>
        <section style={homeStyles}>
            <div style={{width:"60%"}}>
            <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=800" style={{width:"100%"}}></img>
            </div>
            <div style={{width:"40%"}}>
                <h1 style={{fontSize:"3vw"}}>Wipro Employee Management System</h1>
            </div>
        </section>
        </>
    )
}

export default Home;