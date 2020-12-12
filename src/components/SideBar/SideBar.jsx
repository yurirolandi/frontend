import react from 'react';
import { useHistory } from "react-router-dom";

import './SideBar.css';

export default function Sidebar() {
    const { goBack } = useHistory();
  
    return (
      <aside className="app-sidebar">
        {/* <img src={mapMarkerImg} alt="Happy" /> */}
  
        <footer>
          <button type="button">
            <button size={24} color="#FFF" onClick={goBack} />
          </button>
        </footer>
      </aside>
    );
  }