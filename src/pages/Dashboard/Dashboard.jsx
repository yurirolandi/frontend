import react from 'react';
import SideBar from '../../components/SideBar/SideBar';

import './dashboard.css';

function Dashboard () {
    return(
       <div className="dashboard">
           <SideBar />
            <h1>Resumo semanal</h1>
       </div>
    )
}

export default Dashboard;