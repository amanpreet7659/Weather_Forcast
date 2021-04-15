import logo from './logo.svg';
import './App.css';
import Dashboard from './Component/Dashboard';
import Clouds from './Component/Clouds';

function App() {
  return (
    <div className="App">
    <h3>Weather App</h3>
      <Dashboard/>
      {/* <Clouds/> */}
    </div>
  );
}

export default App;
