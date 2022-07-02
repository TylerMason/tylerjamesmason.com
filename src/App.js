import './App.css'
import Layout from './Layout/Layout';
import localData from './data';

function App() {


  // for this data if we were to pull from some sort of database we would need useState and useEffect

  return (
    <Layout data={localData}>
    </Layout>
  );
}

export default App;



