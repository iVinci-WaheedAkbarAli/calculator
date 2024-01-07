import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "gray.100",
        color: "blue.800",
        margin: "0 auto",
        padding: "2rem",
        textAlign: "center",
        backgroundSize: "cover",
        height: "1000px",
      },
    },
  },
});
