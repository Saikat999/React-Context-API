import { createContext } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

export const RingContext = createContext('ring');
const ornaments = 'Diamond + Gold  Ring';

function App() {
  return (
    <RingContext.Provider value={ornaments}>
      <div className="App">
      <GrandFather></GrandFather>
    </div>
    </RingContext.Provider>
  );
}

export default App;
