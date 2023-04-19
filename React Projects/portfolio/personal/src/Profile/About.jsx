import hmtl from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
function About(){

    return(

        <section className='grid grid-cols-3  grid-rows-2 my-[10%] mx-[30%] gap-[15px]'>
            <div>
                <img src={hmtl}></img>
            </div>
            <div>
                <img src={css}></img>
            </div>
            <div>
                <img src={js}></img>
            </div>
            <div>
                <img src={react}></img>
            </div>
            <div>
                <img src={hmtl}></img>
            </div>
        </section>

    );
}

export default About;