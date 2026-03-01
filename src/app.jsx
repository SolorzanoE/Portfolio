import Header from "@/modules/Header"
import Home from "@/modules/sections/Home"
import { Container } from "@mui/material"
import AboutMe from "@/modules/sections/AboutMe"
import Experiencie from "@/modules/sections/Experiencie"
import Proyect from "@/modules/sections/Project"

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Home />
        <AboutMe/>
        <Experiencie />
        <Proyect />
      </Container>
    </>
  )
}

export default App