export const components = {
  Button: {
    sizes: {
      sm: {
        fontSize: "md",
      },
    },
    variants: {
      "button-custom": {
        padding: "10px, 30px, 10px, 30px",
        borderRadius: "30px",
        border: "2px",
        borderColor: "#302D3D",
        color: "#302D3D",
        bg: "#FFFFFF",
      },
      "button-red": {
        padding: "10px, 30px, 10px, 30px",
        borderRadius: "10px",
        border: "2px",
        borderColor: "#302D3D",
        color: "white.900",
        bg: "red.800",
      },
      "button-red-no-border": {
        padding: "10px, 30px, 10px, 30px",
        borderRadius: "10px",
        color: "white.900",
        bg: "red.800",
      },
      "button-accepted": {
        padding: "5px",
        borderRadius: "5px",
        color: "#FFFFFF",
        bg: "#30B54D", 
       
      },
      "button-inprogress": {
        padding: "5px",
        borderRadius: "5px",
        color: "#FFFFFF",
        bg: "#FF8D3B", 
      }
    },
  },
};
