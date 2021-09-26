import './App.css';
import { useState } from 'react'
import { StartPage } from './components/startpage'

function App() {

  const [ tableNR, setTableNR ] = useState(10)

  return (

    <StartPage tableNR={tableNR} setTableNR={setTableNR}></StartPage>
  );
}

export default App;
