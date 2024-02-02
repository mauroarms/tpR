import "bootstrap/dist/css/bootstrap.min.css"
import { Container } from "react-bootstrap"
import Footer from "./components/Footer"
import "./App.css"
import Formulario from "./components/Formulario"

function App() {

  return (
    <>
      <h1 className="text-center display-2">Alta de Peliculas</h1>
      <Container className="contenido">
         
          <Formulario />
        
      </Container>
      <Footer>

      </Footer>
    </>
  )
}

export default App
