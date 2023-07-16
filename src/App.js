import { Router } from "./containers/Router";
import theme from "./theme/";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />;
    </ChakraProvider>
  );
}

export default App;
