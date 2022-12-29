import { useState } from 'react'
import './App.css'
import AppRoutes from "./AppRoutes";
import Sidebar from './components/NavigatorBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Sidebar/>
      <AppRoutes/>
    </div>
  )
}

export default App
