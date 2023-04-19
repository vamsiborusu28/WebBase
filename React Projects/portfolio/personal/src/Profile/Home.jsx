import logo from './vamsiborusu.jpg';

function Home(){

    return(

        <>
        <section className='flex justify-center items-center px-[2%] py-[10%] gap-[20px]'>
            <div className='w-[30vw] h-[50vh] '>
                <img src={logo} className='h-full w-full rounded-2xl'></img>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-2xl font-bold'>I am Vamsi Borusu, Aspiring Full Stack Developer </h1>
            </div>
        </section>
        </>
    );
}

export default Home;