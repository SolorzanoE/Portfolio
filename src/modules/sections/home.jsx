import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"

function Home() {
  return (
    <Stack
      direction="row"
      spacing={4}
      sx={{
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/src/assets/profile.png"
        width="25%"
        style={{
          borderRadius: 100
        }}
      />
      <Stack spacing={1} width="50%">
        <Typography variant="h2"
          sx={{ fontWeight: "bold" }}
        >
          Eduardo Solórzano
        </Typography>
        <Typography variant="h6">
          Ingeniero de Software Full Stack
        </Typography>
        <Typography>
          Ingeniero de Software apasionado por la tecnología y los modelos de negocio, 
          siempre dispuesto a enfrentar nuevos retos, buscando soluciones óptimas y escalables.
        </Typography>
        <Stack direction="row">
          <IconButton href={ GITHUB_URL }>
            <GitHub fontSize="large" />
          </IconButton>
          <IconButton href={ LINKEDIN_URL }>
            <LinkedIn fontSize="large"/>
          </IconButton>
          <IconButton href={ `mailto:${EMAIL_ADDRESS}` }>
            <Email fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Home