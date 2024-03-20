import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/productList' element={<ProductList />}></Route>
        <Route path='/product' element={<Product />}></Route>
      </Routes>
    </>
  )
}

export default App
