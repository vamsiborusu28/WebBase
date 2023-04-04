import React from 'react';

import {useState} from 'react';

import Display from './Display';


function App(){
    //Expense
    const [expenseName,setExpenseName]=useState('');
    const [expense,setExpense]=useState(0);
    
    //Income
    const [incomeName,setIncomeName]=useState('');
    const [income,setIncome]=useState(0);

   
    //List
    const [list,setList]=useState([['Salary',37000,true],['WIFI',530,false]]);
    // Total Income Total Expanse Net Cost
    const [totalIncome,addIncome]=useState(37000);
    const [totalExpense,addExpense]=useState(530);
    const [netCost,setNetCost]=useState(36470);

    // List Functions
    function AddIncome(event){
            event.preventDefault();
            setList([...list,[incomeName,income,true]]);
            addIncome(totalIncome+income);
            setNetCost(netCost+income);
            setIncome(0);
            setIncomeName('');  
    }

    function AddExpense(event){
        event.preventDefault();
        setList([...list,[expenseName,expense,false]]);
        addExpense(totalExpense+expense);
        setNetCost(netCost-expense);
        setExpense(0);
        setExpenseName('');
        
    }
    

    return(
        <>
          <form className="flex items-center justify-center gap-[30px] p-[40px] text-[#03203C]">
            <label className='font-bold text-green-500'>ADD INCOME</label>
            <input placeholder="Enter Income Name" className='border-2 border-white px-[20px] py-[5px] rounded-xl'
             onChange={(event) => setIncomeName(event.target.value)} >

            </input>
            <input placeholder="Enter Income "className='border-2 border-white px-[20px] py-[5px] rounded-xl'
             onChange={(event) => setIncome(Number(event.target.value))}>
                
            </input>
            <button className='border-2 border-white px-[20px] py-[5px] rounded-xl text-white' 
             onClick={AddIncome}>
                ADD
            </button>
          </form>
         
          <form className="flex items-center justify-center gap-[30px] p-[40px] text-black">
            <label className=' font-bold text-red-500'>ADD EXPENSE</label>
            <input placeholder="Enter Expense Name" className='border-2 border-white px-[20px] py-[5px] rounded-xl' 
            onChange={(event) => setExpenseName(event.target.value)}>

            </input>
            <input placeholder="Enter Expense Cost"className='border-2 border-white px-[20px] py-[5px] rounded-xl' 
            onChange={(event) => setExpense(Number(event.target.value))}>

            </input>
            <button className='border-2 border-white px-[20px] py-[5px] rounded-xl text-white' 
             onClick={AddExpense}>
                ADD
            </button>
          </form>
          <section className='flex justify-center items-center gap-[5%]'>
          <table className='text-white text-xl font-bold  border-2 border-solid ' >
            <thead>
            <tr className=' border-b-2 p-[10px] text-[#CAD5E2]'>
                <th className='p-[10px]'>Expense/Income Type</th>
                <th className='p-[10px]'>Expense/Income cost</th>
                <th className='p-[10px]'>Expense/Income</th>
            </tr>
            </thead>
            <tbody>
                {
                    list.map(
                        (element) => {
                            if(element[2]===true){
                              return  (<tr className='border-b-2 text-white '>
                                    <td className='p-[10px]'>{element[0]}</td>
                                    <td className='p-[10px]'>{element[1]}</td>
                                    <td className=' text-green-500 p-[10px]'>Income</td>
                                </tr>);
                            }
                           
                                return  (<tr className='  border-b-2 text-white '>
                                <td className='p-[10px]'>{element[0]}</td>
                                <td className='p-[10px]'>{element[1]}</td>
                                <td className='text-red-500 p-[10px]'>Expense</td>
                            </tr>);   
                            
                        }
                    )
                }
          </tbody>
          
          </table>
          <Display Income={totalIncome} Expense={totalExpense} Net={netCost}></Display>
          </section>
         
        </>
    )
}

export default App;