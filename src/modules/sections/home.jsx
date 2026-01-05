import { Email, GitHub, LinkedIn } from "@mui/icons-material"
import { IconButton, Stack, Typography } from "@mui/material"
import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "@root/config"

function Home() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        flex: 1,
        minHeight: "100dvh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.pexels.com%2Fes-es%2Fbuscar%2Fsin%2520im%25C3%25A1genes%2520de%2520derechos%2520de%2520autor%2F&ved=0CBUQjRxqFwoTCNi-scex85EDFQAAAAAdAAAAABAI&opi=89978449"
        width="100px"
      />
      <Stack spacing={1}>
        <Typography variant="h2"
          sx={{ fontWeight: "bold" }}
        >
          Eduardo Solórzano
        </Typography>
        <Typography variant="h6">
          Ingeniero de Software Full Stack
        </Typography>
        <Typography>
          Apasionado por crear soluciones tecnológicas innovadoras. <br />
          Con más de + años de experiencia desarrollando <br />
          aplicaciones web y móviles escalables.
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