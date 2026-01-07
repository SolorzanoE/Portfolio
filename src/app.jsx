import Header from "@/modules/header"
import Home from "@/modules/sections/home"
import { Container } from "@mui/material"
import AboutMe from "@/modules/sections/about-me"
import Experiencie from "@/modules/sections/experiencie"

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Home />
        <AboutMe/>
        <Experiencie />
      </Container>
    </>
  )
}

export default App