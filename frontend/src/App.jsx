import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'
import './global.css'

// import { Teste } from './Teste';

function App() {

  return (
    <div>
      <Header />
      {/* <Teste /> */}
      <Outlet />
    </div>
  )
}

export default App
