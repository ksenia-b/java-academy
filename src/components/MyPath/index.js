import { Box, Button, Image } from "@chakra-ui/react";
import myPath from "../../assets/i/myPath.png";


export const MyPath = () => {
  return (
    <>
    <Box
    display={"flex"}
    w="100%"
    flexDirection={"column"}
    justifyContent={"space-between"}
    m={"40px 40px 0px 0px"}
    >
        <Box display={"flex"} justifyContent={"space-between"} p={"20px 20px 0px 20px"} >
        <Box justifyContent={"center"} fontWeight={'bold'}>Мой путь</Box>
        <Button variant={"button-red-no-border"}>Открыть все курсы за 50% </Button>
    </Box>

    <Box m={"0 auto"}>
        <Image src={myPath}/>
    </Box>
    </Box>
    </>
  );
};
