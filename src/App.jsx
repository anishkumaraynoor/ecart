import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/wishlist' element={<Wishlist></Wishlist>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/view/:id' element={<View></View>}></Route>
        <Route path='/*' element={<Navigate to={'/'}></Navigate>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
