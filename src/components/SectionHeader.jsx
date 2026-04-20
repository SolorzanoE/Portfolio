import { Box, Stack, Typography } from "@mui/material"

const SectionHeader = ({ eyebrow, title, italicWord, align = "left" }) => {
  const isCenter = align === "center"
  return (
    <Stack
      spacing={{ xs: 2, md: 2.5 }}
      sx={{
        alignItems: isCenter ? "center" : "flex-start",
        textAlign: isCenter ? "center" : "left",
        marginBottom: { xs: 5, md: 8 }
      }}
    >
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ color: "secondary.main" }}
      >
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "secondary.main",
            boxShadow: (theme) =>
              `0 0 0 4px ${theme.palette.mode === "dark" ? "rgba(34,211,238,0.15)" : "rgba(8,145,178,0.12)"}`
          }}
        />
        <Typography variant="overline">{eyebrow}</Typography>
      </Stack>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.5rem" },
          fontWeight: 500
        }}
      >
        {title}
        {italicWord && (
          <Box
            component="span"
            sx={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "secondary.main",
              paddingLeft: "0.25em"
            }}
          >
            {italicWord}
          </Box>
        )}
      </Typography>
    </Stack>
  )
}

export default SectionHeader
