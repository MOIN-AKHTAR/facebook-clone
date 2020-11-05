import React from 'react';
import Header from './Header';
import "./App.css"
import { Sidebar } from './Sidebar';
import { MainSection } from './MainSection';
import { Favourites } from './Favourites';


 const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="app_body">
       <Sidebar/>
        <MainSection/>
        <Favourites/>
      </div>
    </React.Fragment>
  )
}


export default App;