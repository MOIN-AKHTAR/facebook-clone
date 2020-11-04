import React from 'react';
import Header from './Header';
import "./App.css"
import { Sidebar } from './Sidebar';

 const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="app_body">
       <Sidebar/>
        <div>MIDDLE SECTION</div>
        <div>EMBEDED SECTION</div>
      </div>
    </React.Fragment>
  )
}


export default App;