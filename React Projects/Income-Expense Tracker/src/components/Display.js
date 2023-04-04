

function Display(props){

    return(
        <section className="flex justify-center items-center gap-[50px] border-2 border-solid border-white text-[#CAD5E2] w-[550px] my-[20px] px-[10px] py-[10px] rounded-xl">
            <div className="flex justify-content items-center flex-col">
                <label className="text-2xl font-bold">Total Income</label>
                <label className="text-xl text-green-500">₹{props.Income}</label>
            </div>
            <div className="flex justify-content items-center flex-col">
                <label className="text-2xl font-bold">Total Expense</label>
                <label className="text-xl text-red-400">₹{props.Expense}</label>
            </div>
            <div className="flex justify-content items-center flex-col">
                <label className="text-2xl font-bold">Net Total</label>
                <label className="text-xl text-yellow-400">₹{props.Net}</label>
            </div>
        </section>
    );
}

export default Display;