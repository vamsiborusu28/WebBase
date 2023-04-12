import photo from './images/vamsiborusu.jpg';
import {Link} from 'react-router-dom';
function Contact(){


    return(<>

    <section className="mx-[20%] mt-[5%] py-[5%] text-white flex items-center flex-wrap justify-center gap-[10%] text-sky-500">
        <div className='w-[60vh] h-[60vh] rounded-xl'>
            <img src={photo} className='w-full h-full rounded-xl'></img>
        </div>
            <form className=" flex flex-col justify-center items-center gap-[20px] text-xl py-[3%]px-[3%]">
                <label>
                    <span className='text-white'>Email </span>vamsiborusu@gmail.com
                </label>
                <label>
                <span className='text-white'>Contact-No </span>9876543221
                </label>
                <button className='text-lg bg-black  rounded-lg px-[12px] py-[4px] border-2'>
                    <Link to='https:/github.com/vamsiborusu28'>GitHub</Link>
                </button>
            </form>
    </section>
    </>)
}

export default Contact;