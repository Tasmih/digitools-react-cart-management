import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/Navbar/Main/Banner/Banner'
import Carts from './Components/Navbar/Main/Carts/Carts';
import Rating from './Components/Navbar/Main/Rating/Rating'
import Navbar from './Components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import StepSection from './Components/StepSection/StepSection';
import PricingSection from './Components/PricingSection/PricingSection';
import ReadyToStart from './Components/ReadyToStart/ReadyToStart';
import FooterSection from './Components/FooterSection/FooterSection';


const fetchCart = async()=>{
  const res = await fetch ("/data.json")
  return res.json();
};
function App() {
 const CartsPromise = fetchCart();
 const  [selectedProducts, setSelectedProducts] = useState([]);
 const [quantity, setQuantity]= useState(0);
 


  return (
    <>
    <Navbar quantity={quantity}/>
    <Banner/>
    <Rating/>
    <Suspense fallback =<span className="loading loading-spinner loading-xl"></span>>
        <Carts 
        CartsPromise={CartsPromise} 
        setQuantity={setQuantity}
        selectedProducts={selectedProducts}
        setSelectedProducts={setSelectedProducts}/>
    </Suspense>
    <StepSection/>
    <PricingSection/>
    <ReadyToStart/>
    <FooterSection/>
    <ToastContainer/>
    </>
  )
}

export default App
