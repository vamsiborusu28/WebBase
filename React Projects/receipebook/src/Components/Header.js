


function Header(){

    return(
        <>
        <header className='bg-red-600 w-full h-[14vh] flex justify-between items-center text-black text-lg font-bolder'>
            <img src=' https://www.themealdb.com/images/logo-small.png' alt='receipe-logo'></img>
            <nav>
                <ul className='flex justify-center items-center gap-6'>
                    <li className="list-none p-[4px] hover:bg-red-500 hover:text-white rounded-md">Home</li>
                    <li className="list-none p-[4px] hover:bg-red-500 hover:text-white rounded-md">Forum</li>
                    <li>
                        <input type='text' placeholder="Search" className="w-[5rem] h-[2rem] py-[3px] px-[5px] rounded-lg bg-black text-white border-red-400"></input>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    );
}

export default Header;