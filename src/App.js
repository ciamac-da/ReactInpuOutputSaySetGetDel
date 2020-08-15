import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { InputGroup, Button, Alert, FormControl } from 'react-bootstrap'

function App() {
  const [eingabe,setzeEingabe] = React.useState('');
  const [ausgabe,setzeAusgabe] = React.useState(false);
  function change(e){ setzeEingabe(e.target.value); }
  async function abschicken(){
    // to get json fetch from the server!!!
    const antwort = await fetch(`/say?message=${eingabe}`);
  
  
   //von alex const antwort = await fetch(`http://192.168.178.27:3001`);
   // von maxim const antwort = await fetch(`http://192.168.178.80:3002/`);
    // meine const antwort = await fetch(`http://192.168.178.28:3001/`);
    const daten   = await antwort.json()
    setzeAusgabe(daten.message);
  }
  async function setzen(){
    await fetch(`/set?message=${eingabe}`);
  } //here's  is an error here(its about JSON)
  
  
  //this is how to load =>
  //daten ro load kardim vase hamin az false estefade mikonim ke kaar anjam shod
  //
  async function laden(){
    try {
      const antwort = await fetch(`/get`);
      const daten   = await antwort.json()
      setzeAusgabe(daten.message);
    } catch(e){
      setzeAusgabe(false);
    }
  }
  //this is erase function!!!
  // So it's an Asynchronous(async) function; cuz we'll get the datas paraller
  //baraye inke messagi ke daramo az server va az browser pak konam az false estefade mikonam 
  // dar in halat khate 52 mishe null va pak mishe!!!
  async function loeschen(){
    await fetch(`/del`);
    setzeAusgabe(false);
  }
  return (
    //to do some different functions using buttons!!!
    <div className="App">
      <InputGroup>
        <FormControl name='eingabe' value={eingabe} onChange={change} />
        <InputGroup.Append>
          <Button onClick={abschicken}>Say</Button> 
          <Button onClick={setzen}>Set</Button>
          <Button onClick={laden}>Get</Button>
          <Button onClick={loeschen}>Del</Button>
        </InputGroup.Append>
      </InputGroup>
      { ausgabe ? <Alert variant="danger">{ausgabe}</Alert> : null }
    </div>
      // 55 => means if AUSGABE was TRUE then you get alerted!!! If not, then you'll 
      // get NULL(actually false)
  );
}
export default App;
//export App to index!!!