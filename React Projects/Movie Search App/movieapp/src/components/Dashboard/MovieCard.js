


function MovieCard(props){
const film=props.filmData;
// console.log(film?.Response);
if(typeof(film) === 'undefined' && film.Response==='false'){
    console.log("Movie Not Found");
    return (<></>);
}
return(<>
<div className="flex flex-col justify-center items-center w-[30vw] mx-[15%] md:mx-[0]">
    <img src={film?.Poster} width='100px'></img>
    <p>Title: <span className="text-sky-500">{film.Title}</span></p>
    <p>Release Data : <span className="text-sky-500">{film.Released}</span></p>
    <p>Director : <span className="text-sky-500">{film.Director}</span></p>
</div>
</>)
}

export default MovieCard;