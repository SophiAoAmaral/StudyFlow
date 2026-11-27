import { Cadastro } from "./components/pages/Cadastro"
import { Login } from "./components/pages/Login"
import {BrowserRouter, Route, Routes} from 'react-router'
import {AuthLayout} from './components/Layouts/AuthLayout'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Route>

    </Routes>
      
    </BrowserRouter>
  )
}

export default App
