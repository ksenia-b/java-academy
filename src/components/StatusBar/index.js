import { Box, Image, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

import { Logo } from "../Logo";

export const StatusBar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Box
      display={"flex"}
      w="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      //   m={"8px 54px 0px 0px"}
    >
      <Logo />
      <Box display={"flex"} gap={"20px"}>
        {isAuthenticated && (
          <Button
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          >
            Вийти
          </Button>
        )}

        <Box>
          <Button>Корзина</Button>
          <Image />
        </Box>

        <Box>
          <Button>Регистрация</Button>
          <Image />
        </Box>

        <Button>
          <Image></Image>My profile
        </Button>
      </Box>
    </Box>
  );
};
