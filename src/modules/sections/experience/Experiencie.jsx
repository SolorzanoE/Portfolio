import { Stack, Typography } from "@mui/material"
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { dataExperiencie } from "@/data/dataExperience";
import ExperiencieCard from "./ExperienceCard";
import { dataSection } from "@/data/dataSection";

function Experiencie() {
  return (
    <Stack id={dataSection.experience.id}>
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

export default Experiencie