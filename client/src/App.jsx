import React, {useEffect} from 'react'; 
import Web3 from 'web3'; 
import {init} from './controllers/Web3Client';
function App() {

  useEffect(() => {
    init();
  }, []); 

  return (
    <div>
    </div>
  );
}

export default App;
