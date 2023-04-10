
import {useSelector} from 'react-redux';
import TodoComp from './TodoComp';

function TodoDashboard(){

    const todoList=useSelector((state) => state.todos.todos);
    console.log(todoList);

    return(
        <>
        <section className="grid grid-cols-3 items-center justify-center gap-[5vw] mx-[5%]">

        {
            todoList.map((element) => {
                return (<TodoComp data={element} key={element.id}/>)
            })
        }  

        </section>
        </>
    )
}

export default TodoDashboard;