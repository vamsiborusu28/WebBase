
import {addTodo,deleteTodos} from '../features/todoSlice';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

function TodoSearch(){
    const [todo,setTodo]=useState('');
    const [tododis,setTodoDis]=useState('');
    const dispatch=useDispatch();
    const submitTodo=function(event){
        event.preventDefault();
        dispatch(addTodo([todo,tododis]));
        setTodo('');
        setTodoDis('');
    }
    const deleteTodo=function(event){
        event.preventDefault();
        dispatch(deleteTodos());
    }
    return(
        <>
        <section className="w-[32vw]  mx-[auto] my-[5%] bg-[#1a1a40] flex flex-col justify-center items-center py-[2%]">
            <h1 className="text-5xl text-center mb-[2%]">ToDO List!</h1>
            <form className=" flex flex-col  justify-center items-center gap-[3%] mb-[5%]">
                <div className="flex justify-center items-center gap-[2%]">
                <input type='text' placeholder="Enter Todo Name"
                className="border-2 border-[#8758ff] bg-[#1a1a40]
                px-[2%] py-[2%] md:px-[10%]" onChange={(event) => {setTodo(event.target.value)}}>

                </input>
                
                <button className="text-3xl px-[15px] py-[6px] rounded-full bg-[#8758ff] hover:bg-red-600"
                onClick={submitTodo}>
                    +
                </button>
                </div>
                <textarea className="border-2 border-[#8758ff] bg-[#1a1a40]
                px-[20px] py-[2%] md:px-[10%] my-[6%] w-[125%]" placeholder="Enter Description of the task"
                onChange={(event) => {setTodoDis(event.target.value)}}>

                </textarea>
            </form>
            
            <button className="bg-[#8758ff] px-[5%] py-[2%] rounded-xl hover:bg-green-500"
            onClick={deleteTodo}>Delete All</button>
        </section>
        </>
    )
}

export default TodoSearch;