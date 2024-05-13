import './App.css'
import DrawerAppBar from './Header'
import {
  Outlet,
} from "react-router-dom";
function App() {

  return (
    <>
    <DrawerAppBar />
    <Outlet /> 
      {/* <div>
      </div> */}
    </>
  )
}

export default App
