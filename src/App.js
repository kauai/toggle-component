import React,{ useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Toggle = ({ defaulValue, onChange }) => {
  const [ checked, setChecked ] = useState(defaulValue)
  // console.log('CHECKED',checked)
  const onToggle = () => {
    setChecked(!checked)
    if(onChange){
      onChange(!checked)
    }
  }
   return <div className={`toggle ${checked && 'toggle-checked'}`} onClick={onToggle}></div>
}

function App() {
  const [ checked2, setChecked2 ] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img width="150" src={logo} className="App-logo" alt="logo" />
         <Toggle defaulValue/>
         <Toggle onChange={value => setChecked2(value)}/>
         <p>Checked2 {JSON.stringify(checked2)}</p>
      </header>
    </div>
  );
}

export default App;
