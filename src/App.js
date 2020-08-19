import React from 'react';
import AppRouter from './routers/AppRouter';
import "./styles/styles.scss";

class App extends React.Component{
  render(){
    return(
      <AppRouter/>
    );
  }
}

export default App;
