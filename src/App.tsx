import './App.css'
import DrawerAppBar from './Header'
import {
  Outlet,
} from "react-router-dom";
import Home from './Home';
function App() {

  return (
    <>
    <Home />
    {/* <DrawerAppBar />
    <Outlet />  */}
    </>
  )
}

export default App
