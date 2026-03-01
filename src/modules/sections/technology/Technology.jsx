import { Grid, Stack, Typography } from "@mui/material"
import TechnologyChip from "./TechnologyChip"
import { useState } from "react"
import { dataTechnologies } from "@/data/dataTechnologies"

const areas = ["Todos", "Backend", "Frontend", "Mobile", "Database"]

const Technology = () => {
  const [selectedChip, setSelectedChip] = useState("Todos")

  const handleClick = (item) => setSelectedChip(item)

  const filterTechnology = dataTechnologies
    .filter(data => selectedChip === "Todos" ? data : data.area === selectedChip )

  return (
    <Stack>
      <Typography> Tecnologías </Typography>
      <Typography> Stack tecnológico </Typography>
      <Stack direction="row" spacing={2}>
        { areas.map(area => (
          <TechnologyChip key={area}
            label={area} 
            onClick={() => handleClick(area)}
            selected={selectedChip === area}
          />
        ))}
      </Stack>
      <Grid container
        columns={{ xs: 2, sm: 3, md: 4, lg: 5}}  
      >
        { filterTechnology.map(data => (
          <Grid key={data.name}
            size={1}
          >
            { data.name }
          </Grid>
        )) }
      </Grid>
    </Stack>
  )
}

export default Technology