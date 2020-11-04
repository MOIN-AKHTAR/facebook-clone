import React from 'react';
import Header from './Header';
import "./App.css"

 const App = () => {
  return (
    <React.Fragment>
      <Header/>
      <div className="app_body">
        <div>SIDE BAR</div>
        <div>MIDDLE SECTION</div>
        <div>EMBEDED SECTION</div>
      </div>
    </React.Fragment>
  )
}


export default App;