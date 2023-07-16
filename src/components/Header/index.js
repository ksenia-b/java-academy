import { Logo } from "../Logo";
import { Box } from "@chakra-ui/react";
import { Register } from "./Register";
import { Login } from "./Login";

export const Header = () => {
  return (
    <Box
      display={"flex"}
      w='100%'
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      <Logo />
      <Box >
        <Login />
        <Register /> 
      </Box>
    </Box>
  );
};
