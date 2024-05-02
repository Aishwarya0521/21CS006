import './App.css';
import { Route,Routes} from "react-router-dom";
import Productlist from './component/Productlist';
import Productdetail from './component/Productdetail';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
        <Route path="/"  element={<Productlist />} /> 
          <Route path="/product/:productId" element={<Productdetail/>} />
        </Routes> 
      </div>
    </div>
  );
}

export default App;
