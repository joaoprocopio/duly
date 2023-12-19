import { Card, Container, createTheme } from "@mantine/core"

export const theme = createTheme({
  components: {
    Container: Container.extend({
      defaultProps: {
        size: "xl",
        py: "xl"
      }
    }),
    Card: Card.extend({
      defaultProps: {
        py: "xl",
        withBorder: true
      }
    })
  }
})
