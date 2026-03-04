import { dataProject } from "@/data/dataProject"
import { Grid, Stack, Typography } from "@mui/material"
import ProjectCard from "./ProjectCard"
import { dataSection } from "@/data/dataSection"

const Project = () => {
  return (
    <Stack id={dataSection.project.id}>
      <Typography> Proyectos </Typography>
      <Typography> Trabajos Realizados </Typography>
      <Grid container columns={3} spacing={4}>
        { dataProject.map(data => (
          <Grid size={1} key={data.title}>
            <ProjectCard />
          </Grid>
        )) }
      </Grid>
    </Stack>
  )
}

export default Project