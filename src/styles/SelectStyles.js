export const colorStyles = {
  control: (styles, isFocused, isSelected) => ({
    ...styles,
    border: "solid #3f433d 1px",
    boxShadow: "none",
    "&:hover": { border: "solid #000000 1px" },
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      "&:hover": {
        backgroundColor: isSelected ? "#36443C" : "#f4f7f6",
      },

      backgroundColor: isSelected ? "#36443C" : "$white-color",
    };
  },
};
