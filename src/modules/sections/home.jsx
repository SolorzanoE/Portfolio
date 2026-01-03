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
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
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