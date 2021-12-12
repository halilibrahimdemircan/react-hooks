import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import { useState } from 'react'

function App() {
  const [toggleClass, setToggleClass] = useState(true)
  return (
    <div className="App">
      {<ClassComponent />}
      <FunctionalComponent />

      {/* <h1>CLARUSWAY</h1>

      // ROUTES
      <main>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/products" element={<Product />}></Route>
          <Route path="/product-detail" element={<ProductDetail />}></Route>
        </Routes>
      </main> */}
    </div>
  )
}

export default App
