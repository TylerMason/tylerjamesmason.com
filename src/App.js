//import { Card } from '@mui/material';
import './App.css'
import Layout from './Layout/Layout';


function App() {


  // for this data if we were to pull from some sort of database we would need useState and useEffect
  const data = [
    {
      name: 'cardOne',
      mediaURL: 'https://i.gifer.com/AIO6.gif',
      id: 1
    },
    {
      name: 'cardTwo',
      mediaURL: 'https://i.giphy.com/media/26tn84fF0eL3c898c/giphy.gif',
      id: 2
    },
    {
      name: 'cardThree',
      mediaURL: 'https://i.gifer.com/5NkM.gif',
      id: 3
    },
    {
      name: 'cardFour',
      mediaURL: 'https://i.gifer.com/3or4.gif',
      id: 4
    },
    {
      name: 'cardFive',
      mediaURL: 'https://c.tenor.com/6wu4CpELPAwAAAAC/jon-snow-pixel.gif',
      id: 5
    },
    {
      name: 'cardSix',
      mediaURL: 'https://c.tenor.com/-QmSj6ibnt0AAAAC/gregor-clegane-pixel.gif',
      id: 6
    }
    
  ]



  return (
    <Layout data={data}>
    </Layout>
  );
}

export default App;



