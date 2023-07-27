import { Router } from "./containers/Router";
import theme from "./theme/";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin + "/profile"}
      >
        <Router></Router>
      </Auth0Provider>
    </ChakraProvider>
  );
}

export default App;
