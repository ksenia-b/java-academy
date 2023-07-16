import { Box, Text } from "@chakra-ui/react";
import { ButtonRed } from "../../components/Buttton/ButtonRed";
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

        {/* <ButtonRed text={"Начать учиться"} /> */}
      </Box>

      <Footer />
    </Box>
  );
}

export default Prices;
