export const colorStyles = {
  control: (styles, data) => ({
    ...styles,
    border: "solid #cdd0cb 1px",
    boxShadow: "none",
    fontSize: "0.84rem",
    "&:hover": { border: "solid #cdd0cb 1px" },
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      fontSize: "0.9rem",
      "&:hover": {
        backgroundColor: isSelected ? "#36443C" : "#f4f7f6",
      },
      backgroundColor: isSelected ? "#36443C" : "$white-color",
    };
  },
  input: (styles) => ({...styles,  color: "#000"}),
  placeholder: (styles) => ({...styles, color: "#A1A2A9"}),
  singleValue: (styles) => ({ ...styles, color: "#000"}),
};
