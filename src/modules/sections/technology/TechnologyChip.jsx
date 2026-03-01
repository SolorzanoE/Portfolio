import { Chip } from "@mui/material"

const TechnologyChip = ({ label, onClick, selected }) => {
  return (
    <Chip clickable
      label={label}
      onClick={onClick}
      sx={{
        color: selected ? "white" : "black",
        bgcolor: selected ? "black" : "white",
        borderRadius: 2
      }}
    />
  )
}

export default TechnologyChip