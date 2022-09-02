export const colorLangStyles = {
    control: (styles, data) => ({
      ...styles,
      border: "none",
      boxShadow: "none",
      fontSize: "0.82rem",
      paddingRight: "0.5rem",
      "&:hover": {cursor: "pointer"}
    }),
    option: (styles, { isSelected }) => {
      return {
        ...styles,
        fontSize: "0.9rem",
        "&:hover": {
          backgroundColor: isSelected ? "#36443C" : "#eaf5f2",
        },
        backgroundColor: isSelected ? "#36443C" : "$white-color",
      };
    },
    input: (styles) => ({...styles,  color: "#000"}),
    placeholder: (styles) => ({...styles, color: "#A1A2A9"}),
    singleValue: (styles) => ({ ...styles, color: "#064420"}),
  };