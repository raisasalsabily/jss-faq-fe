const multiInputStyles = {
  // box
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  // dropdown option
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "black"
        : isFocused
        ? "#9CDCD1"
        : undefined,
      color: isDisabled
        ? "#ccc"
        : isSelected
        ? "white"
          ? "white"
          : "black"
        : "black",
      fontSize: "0.75rem",
      cursor: isDisabled ? "not-allowed" : "default",
    }
  },
  // selected tags box
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "#9CDCD1",
      width: "min-content",
    }
  },
  // selected tags text
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "#067561",
    fontWeight: "bold",
  }),
  // selected tags remove icon
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: "#067561",
    ":hover": {
      backgroundColor: "#067561",
      color: "white",
    },
  }),
}

export default multiInputStyles
