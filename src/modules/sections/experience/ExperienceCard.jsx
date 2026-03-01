import { Paper, Stack, Typography } from "@mui/material"
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

function ExperiencieCard() {
  return (
    <Paper 
      sx={{
        paddingY: 1,
        paddingX: 2,
        borderRadius: 4,
        marginX: 2 
      }}
    >
      <Stack spacing={1}
        sx={{ textAlign: "left" }}
      >
        <Stack direction="row"
          spacing={1}
          sx={{ alignItems: "center" }}
        >
          <MapsHomeWorkOutlinedIcon
            sx={{
              fontSize: 50,
              bgcolor: "white",
              color: "black",
              padding: 0.5,
              borderRadius: 1.5
            }}
          />
          <Stack>
            <Typography variant="h6" fontWeight="bold"> 
              Title 
            </Typography>
            <Typography variant="subtitle1"> Empresa </Typography>
          </Stack>
        </Stack>
        <Typography> Fecha </Typography>
        <Typography> Descripcion </Typography>
        <Typography> Tecnologias </Typography>
      </Stack>
    </Paper>
  )
}

export default ExperiencieCard