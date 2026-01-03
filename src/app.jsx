import Header from "@/modules/header"
import Home from "@/modules/sections/home"
import { Container } from "@mui/material"

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='xl' disableGutters>
        <Home />
      </Container>
    </>
  )
}

export default App