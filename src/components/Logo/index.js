import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Logo = (props) => (
  <Link to={props.link}>
    <Image src={props.src} alt={"Java-academy  Logo"} m={props.m} />
  </Link>
);
