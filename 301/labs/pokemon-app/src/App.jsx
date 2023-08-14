import './App.css';
import Header from './components/Header';

function App() {

  let myName = 'paul';
  let upperCaseName = myName.toUpperCase();

  return (
    <div>
      <Header subTitle="Create a supa-dupa Pokemon!" /> 
      <p>{upperCaseName}</p>
    </div>
  )
}

export default App
