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
      m={"40px 40px 0px 0px"}
    >
      <Logo />
      <Box display={"flex"} gap={"20px"}>
        <Login />
        <Register /> 
      </Box>
    </Box>
  );
};
