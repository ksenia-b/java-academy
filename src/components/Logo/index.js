import logo from "../../assets/i/logo.svg";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to={"/"}>
    <Image src={logo} alt={"Java-academy  Logo"}/>
  </Link>
);
