import React, {createContext, useState} from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import './App.css';




export const MenuContext = createContext();

function App() {
  

  const [openMenu, setOpenMenu] = useState(false)
   return (
    <MenuContext.Provider value={{openMenu,setOpenMenu}}>
      <div className="App">
        <Navbar/>

      </div>
    </MenuContext.Provider>
  );
}

export default App;