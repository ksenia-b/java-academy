import { Box, Image, FormControl, Input, Link, Button } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


export function ProfileInfo() {
  const { user } = useAuth0();
  let navigate = useNavigate();

  const routeChange = () =>{ 
    navigate(`/profile`);
  }

  return (
    <Box p={6}>
      <Box>
        <Image/>
        <Link href="/profile" >На главную</Link>
      </Box>

      <Box display={"flex"} flexDirection={"column"}>
        <Box fontWeight={"bold"} fontSize={"24px"}>Профиль</Box>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          { user?.picture && <Image src={user.picture}  borderRadius={"50%"}  w={"55px"} />}
          <Box>Изменить фото</Box>
       
            <FormControl display={"flex"} flexDirection={"column"} width={"30%"}  gap={"20px"}>

              { (user?.given_name &&  user?.family_name) && <Input placeholder="name" value={(user?.given_name &&  user?.family_name)}></Input> }
              { (user?.email) && <Input placeholder="email" value={(user?.email) }></Input> }
              { (user?.nickname) && <Input placeholder="nickname" value={(user?.nickname) }></Input>}

              <Link>Изменить пароль</Link>
              <Button variant={"button-red-no-border"} onClick={routeChange}>Сохранить</Button>
            </FormControl>
  
        </Box>
      </Box>
    </Box>
  );
}
