const DropInputStyle = {
  control: (styles) => ({ ...styles, backgroundColor: "white" }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? "#808080"
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
      cursor: isDisabled ? "not-allowed" : "default",

      ":active": {
        ...styles[":active"],
        backgroundColor: !isDisabled
          ? isSelected
            ? "white"
            : "white"
          : undefined,
      },
    }
  },
  input: (styles) => ({ ...styles }),
  singleValue: (styles, { data }) => ({
    ...styles,
    backgroundColor: "white ",
  }),
}

export default DropInputStyle
