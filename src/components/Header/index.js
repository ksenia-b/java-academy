import { useAuth0 } from "@auth0/auth0-react";
import {
  Box,
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import { Logo } from "../Logo";
import { Main } from "../../pages/Main";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <Box
      display={"flex"}
      w="100%"
      flexDirection={"row"}
      justifyContent={"space-between"}
      m={"40px 40px 0px 0px"}
    >
      <Logo />
      <Box display={"flex"} gap={"20px"}>
        {/* <Button onClick={onOpen} >Логин</Button> */}
        {!isAuthenticated && (
          <Button
            onClick={() => {
              loginWithRedirect(
     
              );
            }}
          >
            Логин
          </Button>
        )}
 

        <Button>Регистрация</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} bg={"white.900"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* <Lorem count={2} /> */}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          loginWithRedirect();
        }}
      >
        Sign In
      </button>
    )
  );
};

export default LoginButton;
