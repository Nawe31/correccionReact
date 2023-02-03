
import './App.css';
import Navbar from './componentes/NavBar/Navbar';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './componentes/pages/HomePage';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import PageNotFound from './componentes/pages/PageNotFound';
import Form from './componentes/pages/Form';
import { CartProvider } from './storage/cartContext';
import CartContainer from './componentes/CartContainer/CartContainer';
import app, { obtenerProductos } from './service/firebaje';
import ItemListContainerSearch from './componentes/ItemListContainer/ItemListContainerSearch';






function App() {

  obtenerProductos();
function logOutSession(){
console.log("logout");
}

function logInSession(username){
  alert(`bienvenido ${username}`);
  }

  return (
  <>
  
 <BrowserRouter>
 <CartProvider>
 <Navbar onLogin={logInSession}  onLogout={logOutSession}/>
<Routes>
  <Route path='/' element={<ItemListContainerSearch/>}/>
  <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
  <Route path="/cart" element={<CartContainer/>} />
  <Route path="/category/:categoryid" element={<ItemListContainerSearch />} />
  <Route path='/formulario' element={<Form/>}/>
  <Route path='*' element={<PageNotFound/>}/>
</Routes>
</CartProvider>
</BrowserRouter>

  </>
    
);
}

export default App;
