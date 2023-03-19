



function Prog(progs){
return(
    <>
    <h1>{progs.name}</h1>
    <ul>
        {progs.list.map((ele) => (<li>{ele}</li>))}
    </ul>
    </>
);
}
export default Prog