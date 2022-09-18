export const colorStyles = {
  control: (styles, data) => ({
    ...styles,
    border: "solid #cdd0cb 1px",
    boxShadow: "none",
    fontSize: "0.84rem",
    "&:hover": { border: "solid #cdd0cb 1px", cursor: "pointer" },
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
  singleValue: (styles) => ({ ...styles, color: "#000"}),
};
