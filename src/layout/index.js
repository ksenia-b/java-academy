import { Box } from  "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { StatusBar } from "../components/StatusBar";
import { RegFooter } from "../components/RegFooter";


function Layout() {
  return (
    <Box p={6}>
      <StatusBar />
      <main>
        <Outlet />
      </main>
      <RegFooter />
    </Box>
  );
}

export default Layout;
