import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Oder from './Components/Oder';
import About from './Components/About';
import BannerCenter from './Components/BannerCenter';
import DayMenu from './Components/DayMenu';
import Discount from './Components/Discount';
import ListPizza from './Components/ListPizza';
import NewProductItem from './Components/NewProduct';
import DiscountProduct from './Components/DiscountProduct';
import PeopleComment from './Components/People';

function App() {
  
  return (
    <div className="font-fontRic">
      <Header />
      <Banner />
      <Oder />
      <About />
      <BannerCenter />
      <DayMenu />
      <Discount />
      <ListPizza />
      <NewProductItem/>
      <DiscountProduct/>
      <PeopleComment/>
    </div>
  );
}

export default App;
