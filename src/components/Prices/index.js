import { Box, Text, Button } from "@chakra-ui/react";
import Footer from "../Footer";

function Prices() {
  return (
    <Box id={"advantages"} display={"flex"} flexDirection={"column"}>
      <Text
        m={"0px 0px 0px 67px"}
        fontSize={"60px"}
        fontWeight={"500"}
        letterSpacing={"-0.06em"}
      >
        Ценовая политика
      </Text>

      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        color={"white.900"}
        alignItems={"center"}
        p={"20px 0px 20px 0px"}
      >
        <Box
          padding={"30px 40px"}
          bg={"black.800"}
          layerStyle={"fonts.body"}
          borderRadius={"20px"}
          w={"50%"}
          alignItems={"center"}
        >
          Стоимость модуля составляет от 2499 ₽ до 4999 ₽
        </Box>

        <Box
          padding={"30px 40px"}
          bg={"black.800"}
          layerStyle={"fonts.body"}
          borderRadius={"20px"}
          w={"50%"}
          alignItems={"center"}
        >
          <Text>Спец цена при одновременной поĸупĸе всех модулей:</Text>
          <Box>
            <Text color={"red.800"}>70 000 ₽</Text>
            <Text fontSize={"20px"}>35 000 ₽</Text>
          </Box>
        </Box>

        <Box alignItems={"center"} color={"gray.800"}>
          <Text>Согласись, </Text>
          <Text>35 000 за новую профессию — это выгодная сделĸа!</Text>
        </Box>

        <Button variant={"button-red"}>Начать учиться</Button>
      </Box>

      <Footer />
    </Box>
  );
}

export default Prices;
