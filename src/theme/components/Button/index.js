import { lighten, getColor, mode } from "@chakra-ui/theme-tools";
import { color } from "framer-motion";

export const Button = {
  colors: {
    userSelected: {},
  },
  components: {
    // variant: {
      // ButtonCustom: {
      //   cursor: "pointer",
      //   bgColor: "red.800",
      //   _hover: {
      //     bgColor: "red.900",
      //     color: "white.900"
      //   },
    //   },
    //   ButtonRed: {},
    // },

    components: {
      Button: {
        // 1. We can update the base styles
        baseStyle: {
          fontWeight: 'bold', // Normally, it is "semibold"
        },
        // 2. We can add a new button size or extend existing
        sizes: {
          xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
          },
        },
        // 3. We can add a new visual variant
        variants: {
          ButtonCustom: {
            cursor: "pointer",
            bgColor: "red.800",
            _hover: {
              bgColor: "red.900",
              color: "white.900"
            },
        },
          ButtonRed: {},
        // 6. We can overwrite defaultProps
        defaultProps: {
          size: 'lg', // default is md
          variant: 'sm', // default is solid
          colorScheme: 'green', // default is gray
        },
      },
    }


  }
};


