import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Update from "./pages/Update";
import MangeEmp from "./pages/NewAdd";
import Order from "./pages/Order";
import UserOrder from "./pages/UserOrder";






export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>


       
        <Route path="/add" element={<MangeEmp />} />
        <Route path="/" element={<Order />} />
        <Route path="/UserOrder" element={<UserOrder />} />
        <Route path="/manage/:idd" element={<Update />} />
       
  
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
