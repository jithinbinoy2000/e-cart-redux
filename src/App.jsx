import { Routes ,Route,Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Header from './Componets/Header'
import Footer from './Componets/Footer'

function App() {


  return (

  <>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        {/* uniqe identifier */}
        <Route path="/view/:id" element={<View/>}></Route>
        {/* default page when user enter wrong url */}
        <Route path="/*" element={<Navigate to={"/"}/>}></Route>
      </Routes>
    <Footer/>
    </>
   
  )
}

export default App
