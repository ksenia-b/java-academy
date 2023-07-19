import logo from "../../assets/i/logo.svg";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to={"/"}    >
    <Image src={logo} alt={"Java-academy  Logo"}  m={"20px 0px 0px 60px"}/>
  </Link>
);
