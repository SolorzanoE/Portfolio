import { dataProject } from "@/data/dataProject"
import { Grid, Stack } from "@mui/material"
import ProjectCard from "./ProjectCard"
import { dataSection } from "@/data/dataSection"
import SectionHeader from "@/components/SectionHeader"

const Project = () => {
  return (
    <Stack
      id={dataSection.project.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Proyectos" title="Trabajos" italicWord="realizados" />

      <Grid container spacing={{ xs: 2.5, md: 3 }}>
        {dataProject.map((data, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={data.title ?? idx}>
            <ProjectCard data={data} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Project
