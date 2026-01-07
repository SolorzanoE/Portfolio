import { Paper, Stack, Typography } from "@mui/material"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { dataExperiencie } from "@/data/data-experience";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';

function Experiencie() {
  return (
    <Stack>
      <Typography> Experiencia </Typography>
      <Typography> Mi Trayectoria Profesional </Typography>
      <Timeline position="alternate">
        { dataExperiencie.map(data => (
          <TimelineItem key={data.title}>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> 
              <ExperiencieCard />  
            </TimelineContent>
          </TimelineItem>
        )) }
      </Timeline>
    </Stack>
  )
}

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

export default Experiencie