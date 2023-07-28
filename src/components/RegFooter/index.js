import { Box, ListItem, UnorderedList } from "@chakra-ui/react";

export const RegFooter = () => {
  return (
    <Box
      display={"flex"}
      w="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      p={"30px"}
      bg={"#302D3D"}
    >
      <UnorderedList display={"flex"} gap={7} color={"#fff"}  styleType={"none"} fontSize={"12px"}>
        <ListItem>Копирайт</ListItem>
        <ListItem>поддержка?</ListItem>
      </UnorderedList>

    </Box>
  );
};
