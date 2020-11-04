import React from 'react';
import Header from './Header';
import "./App.css"
import { Sidebar } from './Sidebar';
import { MainSection } from './MainSection';


 const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="app_body">
       <Sidebar/>
        <MainSection/>
        <div style={{width:"360px"}}>LEFT SIDE BAR</div>
      </div>
    </React.Fragment>
  )
}


export default App;