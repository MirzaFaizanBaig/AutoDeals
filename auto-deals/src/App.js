import logo from "./logo.svg";
import "./App.css";
import PromoCardList from "./components/promoCardList/promoCardList";
import {AutoDealProvider} from "./store/context/AutodealContext";
function App() {
  
  return (
    <AutoDealProvider>
    <PromoCardList/>
    </AutoDealProvider>
  )
}

export default App;
