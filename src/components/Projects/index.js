import { Box, UnorderedList, ListItem, Button, Image } from "@chakra-ui/react";
import Menthor from "../../assets/i/menthor.png"

export const Projects = () => {
  return (
    <Box
    display={"flex"}
    flexDirection={"row"}
    justifyContent={"space-between"}
    p={"20px"}
    >
      <Box boxShadow={"#EBE6E6 0px 8px 8px"} padding={"30px"} borderRadius={"10px"}>
      <Box>
            <Box fontWeight={'bold'} >Проекты</Box>
            <UnorderedList color={"#302D3D"}  styleType={"none"}> 
            {/* dark garay */}
                <ListItem display={"flex"} gap={"30px"} p={"30px"}>
                    <Box>SQL</Box>
                    <Box>Проект Университет</Box>
                    <Box></Box>
                    <Button variant={"button-accepted"}>Принят</Button>
                </ListItem>

                <ListItem display={"flex"} gap={"30px"} p={"30px"}>
                    <Box>java core</Box>
                    <Box>Проект Toyoya</Box>
                    <Box>Этап 2</Box>
                    <Button variant={"button-inprogress"}>В работе</Button>
                </ListItem>
            </UnorderedList>
        </Box>

        <Box>
            <Box  fontWeight={'bold'} >Модули</Box>
            <UnorderedList color={"#302D3D"}  styleType={"none"}> 
            {/* dark garay */}
                <ListItem display={"flex"} gap={"30px"} p={"30px"}>
                    <Box>Типы данных в java</Box>
                    <Box>Progress bar</Box>
                </ListItem>
            </UnorderedList>
        </Box>

        <Box>
            <Box  fontWeight={'bold'}>Последние лекции</Box>
            <UnorderedList color={"#302D3D"}  styleType={"none"}> 
            {/* dark garay */}
                <ListItem display={"flex"} flexDirection={"column"} gap={"30px"} p={"30px"}>
                    <Box>Числа</Box>
                    <Box>Символы</Box>
                </ListItem>
            </UnorderedList>
        </Box>
      </Box>

      <Box  boxShadow={"#EBE6E6 0px 8px 8px"} padding={"10px"} borderRadius={"10px"} h={"200px"}>
        <Box fontWeight={'bold'}>Мой куратор</Box>
        <Box>В любой непонятной ситуации - пиши</Box>
        <Box>
            <Image src={Menthor}></Image>
            <Box>Константин  Константинопольский</Box>
        </Box>
      </Box>
    </Box>

  );
};
