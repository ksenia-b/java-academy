import { Box, Text } from "@chakra-ui/react";
import { Button } from '@chakra-ui/react';
import { Header } from "../../components/Header";
import MainNavigation from "../../components/MainNavigation";

function HeroBanner() {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        bg={"#302D3D"}
        borderRadius={"20px"}
        alignItems={"center"}>
        <Header />
        <Box
          color={"#DEDCE7"}
          fontSize={"110px"}
          fontWeight={500}
          lineHeight={"106px"}
          display={"flex"}
          flexDirection={"column"}>
          <Text m={"78px 0px 0px 58px"}>Становись</Text>
          <Text
            m={"0px 0px"}
            transform={"rotate(-2deg)"}
            flexDirection={"row"}
            display={"flex"}
            alignItems={"center"}>
            <Text bg={"red"} w={"328px"} m={"0px 0px"}>
              {"{Java}"}
            </Text>
            <Text>-разработчиком</Text>
          </Text>
          <Text justifyContent={"right"} display={"flex"} marginTop={"-27px"}>
            вместе с нами
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"column"}
          color={"#FFFFFF"}
          fontSize={"20px"}
          alignItems={"center"}
        >
          <Text w={"325px"}>
            Получи классную востребованную профессию и зарабатывай дома в
            удобное время
          </Text>
          <Button variant='button-red' >Начать учиться</Button>
        </Box>
        <MainNavigation />
      </Box>
    </Box>
  );
}

export default HeroBanner;
