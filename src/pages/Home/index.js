import { Box } from "@chakra-ui/react";
import About from "../../components/About";
import Advantages from "../../components/Advantages";
import Feedbacks from "../../components/Feedbacks";
import HeroBanner from "../../components/HeroBanner";
import Prices from "../../components/Prices";


export function Home() {

  return (
    <Box p={6}>
      <HeroBanner />
      <About />
      <Advantages />
      <Feedbacks />
      <Prices />
    </Box>
  );
}
