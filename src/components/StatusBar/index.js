import { Image, Menu, MenuButton, Link } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import logoHorisontal from "../../assets/i/logoHorisontal.png";
import { Logo } from "../Logo";
import CircleIcon  from "../CircleIcon";
import {
  Box
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const StatusBar = () => {
  const { logout, user, isAuthenticated } = useAuth0();
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    navigate(`/profile/info`);
  }
  
  return (
    <Box
    display={"flex"}
    flexDirection={"row"}
    bg={"#302D3D"}
    borderRadius={"20px"}
    justifyContent={"space-between"}
    p={4}
    >
      <Logo src={logoHorisontal} m={"20px 0px 0px 60px"} link={"/profile"}/>

      <Box display={"flex"} gap={4} fontSize={"14px"} color={"#FFFFFF"}>
      <Menu color={"white.100"} display="flex" w="100%" >
        {isAuthenticated && (
            <MenuButton
              onClick={() => {
                logout({ returnTo: window.location.origin }); }} >
            Вийти
                
                </MenuButton>
            )}

            <MenuButton>
               Корзина
                <Box float={"right"} display={"flex"}><Box>1</Box><CircleIcon/></Box>
            </MenuButton>

            <MenuButton>
              Мои уведомления
                <Box float={"right"} display={"flex"}><Box>2</Box><CircleIcon/></Box>
            </MenuButton>
          
      </Menu>
        <Box onClick={routeChange}>
        { user?.picture && <Image src={user.picture} alt={user?.name} borderRadius={"50%"}  w={"55px"} cursor={"pointer"}/> }
        </Box>
      </Box>

    </Box>


  )
};




