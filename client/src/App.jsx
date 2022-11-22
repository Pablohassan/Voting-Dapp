import { EthProvider } from "./contexts/EthContext";


import Voters from "./components/Voters";

import "./App.css";

function App() {

  
  return (
    <EthProvider>
      <div  >
        <div className="container">
         
         
        
       
          <Voters />
   
         
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
