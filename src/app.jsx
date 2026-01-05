import Header from "@/modules/header"
import Home from "@/modules/sections/home"
import { Container } from "@mui/material"
import AboutMe from "@/modules/sections/about-me"

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='xl'>
        <Home />
        <AboutMe/>
      </Container>
    </>
  )
}

export default App