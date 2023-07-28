import { Icon } from "@chakra-ui/react";

const CircleIcon = (props) => (
    <Icon viewBox='0 0 180 180' {...props}>
      <path
        fill='#D0082C'
        d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
      />
    </Icon>
  )

export default CircleIcon;