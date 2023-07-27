import { Box } from "@chakra-ui/react";

import { StatusBar } from "../../components/StatusBar";
import { MainContent } from "../../components/MainContent";
import { RegFooter } from "../../components/RegFooter";

export function Main(props) {
  return (
    <Box p={6}>
      <StatusBar logout={props.logout} />
      <MainContent />
      <RegFooter />
    </Box>
  );
}
