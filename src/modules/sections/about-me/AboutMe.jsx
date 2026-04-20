import SectionHeader from "@/components/SectionHeader"
import { dataSection } from "@/data/dataSection"
import { Box, Grid, Stack, Typography } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const AboutMe = () => {
  return (
    <Stack
      id={dataSection.aboutMe.id}
      sx={{
        paddingBlock: { xs: 8, md: 14 }
      }}
    >
      <SectionHeader eyebrow="Sobre mí" title="Mi" italicWord="historia" />

      <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.7
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              vel lobortis velit. Donec vitae urna imperdiet, iaculis libero a,
              dignissim eros. Morbi sed euismod ante. Pellentesque a leo at nunc
              mattis aliquam.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.7
              }}
            >
              Integer id leo at enim aliquam varius. Aliquam erat volutpat. Ut a
              maximus eros. Suspendisse a augue at purus pharetra vulputate sed
              eget odio. In viverra pellentesque suscipit. Nulla dignissim lacus
              non porta consequat.
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                fontSize: { xs: "1rem", md: "1.08rem" },
                lineHeight: 1.7
              }}
            >
              Proin et semper elit. In tristique bibendum magna, id sollicitudin
              mauris ullamcorper eget. Nam dictum sed erat vel auctor.
            </Typography>
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              position: "relative",
              padding: { xs: 3, md: 4 },
              borderRadius: 3,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background: (t) =>
                  t.palette.mode === "dark"
                    ? "radial-gradient(400px 200px at 100% 0%, rgba(34,211,238,0.10), transparent 60%)"
                    : "radial-gradient(400px 200px at 100% 0%, rgba(8,145,178,0.08), transparent 60%)",
                pointerEvents: "none"
              }
            }}
          >
            <FormatQuoteIcon
              sx={{
                position: "absolute",
                top: 10,
                right: 14,
                fontSize: 52,
                color: "secondary.main",
                opacity: 0.18
              }}
            />
            <Stack spacing={2.5} sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontSize: { xs: "1.75rem", md: "2.1rem" },
                  fontWeight: 400,
                  lineHeight: 1.25,
                  letterSpacing: "-0.01em"
                }}
              >
                Talk is cheap. Show me the code.
              </Typography>
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Box sx={{ width: 24, height: "1px", bgcolor: "secondary.main" }} />
                <Typography variant="overline" sx={{ color: "secondary.main" }}>
                  Linus Torvalds
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default AboutMe
