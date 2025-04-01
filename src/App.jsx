import { Container } from "react-bootstrap"
import { NavbarApp } from "./components/index"
import { PrintCard } from "./components/printCards"

function App(){
  return(
    <>
    <Container className="mt-3">
      <NavbarApp/>
      <PrintCard/>
    </Container>
    </>
  )
}

export default App
