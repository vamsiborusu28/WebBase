import {Outlet,Link} from 'react-router-dom';

function Dashboard(){

    return(
        <>
        <h1>This is DashBoard</h1>
        <button>
            <Link to='/dashboard/settings'>Settings</Link>
        </button>

        <button>
            <Link to='/dashboard/profile'>Profile</Link>
        </button>
        <p>@VamsiBorusu</p>
        
        <Outlet></Outlet>
        </>

    )
}

export default Dashboard;