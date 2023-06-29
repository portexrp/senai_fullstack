import React from 'react';
import '../src/css/App.css';
import googleLogo from '../src/images/googleLogo.jpg';
import Input from './components/Input.js';
import Navbar from './components/Navbar';
import Button from './components/Button';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <img src={googleLogo} alt='Google logo'/>
      <Input />
      <Button txt='Pesquisa Google' num={123} bool={true}/>
      <Button txt='Estou com sorte' num={456} bool={true}/>

      
    </div>
  );
}

export default App;
