import React, { useEffect, Fragment } from 'react';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs'
import AddBtn from './components/layout/AddBtn'
import AddLogModal from './components/logs/AddLogModal.js'
import AddTechModal from './components/techs/AddtechModal.js'
import TechListModal from './components/techs/TechListModal.js'
import EditLogModal from './components/logs/EditLogModal.js'
// Import provider and store for redux
import { Provider } from 'react-redux';
import store from './store';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';


const App = () => {
  useEffect(() => {
    // Initializes Maerialize JS
    M.AutoInit();
  })

  return (
    // Need to add only one provider for react
    <Provider store={store}>
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
    </Provider>
  );
}


export default App;