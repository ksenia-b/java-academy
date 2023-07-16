import { Button } from "@chakra-ui/react";

export const ButtonCustom = (props) => {
  return (
    <Button
      borderRadius={"25px"}
      background={"#FFF"}
      fontFamily={"Inter"}
      fontSize={"20px"}
      fontStyle={"normal"}
      fontWeight={"400"}
      lineHeight={"24px"}
      color={"#302D3D"}
      padding={"10px 30px"}
      cursor={"pointer"}
      gap={"10px"}
      textAlign={"center"}
    >
      {" "}
      {props.text}{" "}
    </Button>
  );
};
/* Вход */

// width: 48px;
// height: 24px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;

// color: #302D3D;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
