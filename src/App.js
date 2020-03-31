import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal.js'
import AddTechModal from './components/techs/AddtechModal'
import TechListModal from './components/techs/TechListModal'
import EditLogModal from './components/logs/EditLogModal.js'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


const App = () => {
  useEffect(() => {
    // Initializes Maerialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <Logs />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>

    </Fragment>
  );
}


export default App;