import { Box, Stack, Typography } from "@mui/material"

function AboutMe() {
  return (
    <Stack spacing={2}
      sx={{
        marginBottom: "5rem"
      }}
    >
      <Typography> Sobre Mí </Typography>
      <Typography> Mi Historia </Typography>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vel lobortis velit. Donec vitae urna imperdiet, iaculis libero a, dignissim eros. Morbi sed euismod ante. Pellentesque a leo at nunc mattis aliquam. Nam malesuada est vel diam aliquet tincidunt. Donec ut enim lacus. Donec ornare magna sapien. Maecenas pellentesque, sapien id pulvinar lacinia, arcu nunc vulputate odio, eget elementum justo erat ullamcorper turpis. Praesent eu ornare nulla. Aenean cursus mi id tempor suscipit. Suspendisse rhoncus, risus in dictum scelerisque, felis magna eleifend velit, vitae dictum risus ante eu urna. Fusce id euismod tortor. Vestibulum placerat tellus nec ex fermentum blandit.

        Integer id leo at enim aliquam varius. Aliquam erat volutpat. Ut a maximus eros. Suspendisse a augue at purus pharetra vulputate sed eget odio. In viverra pellentesque suscipit. Nulla dignissim lacus non porta consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc id viverra lectus.

        Proin et semper elit. In tristique bibendum magna, id sollicitudin mauris ullamcorper eget. Nam dictum sed erat vel auctor. Donec vel enim rhoncus, tristique enim non, auctor sapien. Mauris quis ornare dui. Etiam vitae ligula turpis. Duis egestas auctor vestibulum. Curabitur semper, ipsum et dignissim volutpat, nulla urna tristique nunc, eget tincidunt libero nibh eu leo. Proin cursus metus non nisl iaculis rhoncus. Donec suscipit molestie purus. Vivamus ultricies, augue sed fermentum suscipit, nulla ante imperdiet tortor, eu eleifend urna turpis et ligula. Nulla eu nulla vitae neque efficitur volutpat fermentum et erat. Nam elit lorem, rhoncus eget dui eu, bibendum tempus nunc. Duis vitae posuere augue, sed maximus sapien. Curabitur diam dolor, rhoncus id iaculis ac, fringilla at tortor. In non enim ornare, ornare velit id, placerat turpis.

        Curabitur quam urna, luctus laoreet ullamcorper sed, aliquam eget metus. Ut laoreet mauris vel quam tincidunt fermentum. Nulla varius lobortis urna nec volutpat. Cras porta ipsum ornare mollis facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consectetur quam nunc, a tincidunt lectus imperdiet non. Aenean luctus, eros in dignissim tempus, risus justo gravida ex, vitae tempor metus felis id odio. Maecenas in gravida augue. Nunc aliquam erat dui, blandit pulvinar felis molestie eu.
      </Typography>
      <Stack direction="row"
        spacing={2}
        sx={{
          alignItems: "center"
        }}
      >
        <Box 
          sx={{
            width: 5,
            height: 100,
            bgcolor: "white"
          }}
        />
        <Stack>
          <Typography> Talk is cheap. Show me the code. </Typography>
          <Typography> - LINUS TORVALDS </Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default AboutMe