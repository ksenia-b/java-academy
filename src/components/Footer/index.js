import { Box, Text, Button } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      fontSize={"60px"}
      bg={"gray.800"}
      display={"flex"}
      flexDirection={"column"}
      gap={"20px"}
      borderRadius={"20px 20px 0px 0px"}
      color={"white.900"}
      p={"40px"}
    >
      <Box textAlign={"left"} marginLeft={"30px"}>
        <Text>Остались вопросы?</Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        gap={"20px"}
        margin={"0 auto"}
      >
        <Box></Box>
        <Text>Пиши!</Text>
        <Button variant={"button-red"}>Перейти в Telegram</Button>
      </Box>
    </Box>
  );
}

export default Footer;
