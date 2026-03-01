import { Divider, Paper, Stack, Typography } from "@mui/material"

const ProjectCard = () => {
  return (
    <Paper 
      sx={{
        borderRadius: 4,
        paddingY: 1,
        paddingX: 2
      }}
    >
      <Stack>
        <img width="50%" height={100} src="https://r-charts.com/es/miscelanea/procesamiento-imagenes-magick_files/figure-html/importar-imagen-r.png" />
        <Stack spacing={1}>
          <Typography> Title </Typography>
          <Typography> Detail </Typography>
          <Divider />
          <Typography> Technologies </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}

export default ProjectCard