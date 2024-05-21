import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/"
import AddProductPage from "./pages/AddProductPage/"
import DetailsPage from "./pages/DetailsPage/"
import NotFoundPage from "./pages/NotFoundPage/"
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Cards from "./layout/Cards";
function App() {
  return (
    <>
    <Header/>
    <Cards/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/addProduct" element={<AddProductPage/>}/>
        <Route path="/detailsPage" element={<DetailsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
