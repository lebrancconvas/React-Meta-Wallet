import React, {useState} from 'react'; 
import {Typography, Button} from '@mui/material';
import {Box} from '@mui/system';
// import Web3 from 'web3'; 
import {mintToken} from './controllers/Web3Client';
function App() {
  const [minted, setMinted] = useState(false);

  const mint = () => {
    mintToken().then(transaction => {
      console.log(transaction);
      setMinted(true);
    }).catch(err => {
      console.log(err);
    })
  }

  // useEffect(() => {
  //   init();
  // }, []); 

  return (
    <div>
      <Box sx={{textAlign: 'center'}}> 
        <Typography variant="h3">
          React Meta Wallet 
        </Typography>
        <Box mt={10}>
          {
            !minted ? (
              <Button variant="contained" onClick={() => mint()}>
                Mint Token 
              </Button>
            ) : (
              <Typography variant="h5">
                Token minted successfully. 
              </Typography>
            )
          }
        </Box>
      </Box>
    </div>
  );
}

export default App;
