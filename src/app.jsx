import Header from "@/modules/Header"
import Home from "@/modules/sections/home/Home"
import { Container } from "@mui/material"
import AboutMe from "@/modules/sections/about-me/AboutMe"
import Experiencie from "@/modules/sections/experience/Experiencie"
import Proyect from "@/modules/sections/project/Project"
import Technology from "./modules/sections/technology/Technology"

function App() {
  return (
    <>
      <Header />
      <Container disableGutters maxWidth 
        sx={{ paddingBlock: 2, paddingInline: 5 }}
      >
        <Home />
        <AboutMe/>
        <Experiencie />
        <Proyect />
        <Technology />
      </Container>
    </>
  )
}

export default App