import { Box, ListItem, UnorderedList } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import classes from "./MainNavigation.module.css";
import { nav } from "./items";

import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function MainNavigation() {
  const scrollLinkProps = {
    activeStyle: { color: "white" },
    spy: true,
    smooth: true,
    duration: 500,
    offset: -76,
    hashSpy: true,
  };

  const { pathname, hash } = useLocation();

  return (
    <Box className={classes.mainNavigation}>
      <UnorderedList  styleType={"none"}>
        {nav[0].content.map((item) => {
          console.log(
            "`${pathname}#${item.link}` = ",
            `${pathname}#${item.link}`
          );

          return (
            <ListItem>
              {" "}
              <ScrollLink key={item.link} {...scrollLinkProps} to={item.link}>
                <Button variant="button-custom">{item.label}</Button>
              </ScrollLink>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Box>
  );
}

export default MainNavigation;
