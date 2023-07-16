import { colors } from "./colors";
import { components } from "./components";
import { global } from "./global";
import { extendTheme } from "@chakra-ui/react";

// Base Chakra theme:
// https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src

// const breakpoints = {
//   // base: '0',
//   // sm: '576px',
//   // md: '768px',
//   // lg: '992px',
//   // xl: '1200px',
//   // '2xl': '1400px',
// };

const theme = extendTheme({
  styles: { global },
  colors,
  // components,
  fonts: {
    body: "Inter",
  },
});

export default theme;
