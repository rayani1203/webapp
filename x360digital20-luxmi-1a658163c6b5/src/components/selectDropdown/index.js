import Select from "react-select";
import React from "react";

const SelectDropdown = (props) => {
  const styles = {
    container: (base) => ({
      ...base,
      width: props.containerWidth ? props.containerWidth : "100%",
    }),
    control: (base) => ({
      ...base,
      border: props.border ? props.border : "none",
      background: props.background
        ? props.background
        : "var(--lightPrimaryColor)",
      borderRadius: props.borderRadius ? props.borderRadius : "1.5rem",
      fontSize: "1.6rem",
      padding: props.padding ? props.padding : "1.9rem 2rem",
      outline: "none",
      boxShadow: "none",
      cursor: "pointer",
      '@media (max-width: 1399px)': {
          width: props.containerWidthMobile ? props.containerWidthMobile : "79%"
      },
      '@media (max-width: 1199px)': {
        marginLeft: props.controlM ? props.controlM: "-19rem",
    },
    '@media (max-width: 990px)': {
      marginLeft: props.controlM ? props.controlM: "-29rem",
      width: props.containerWidthMobile ? props.containerWidthMobile : "55%"

  }
    }),
    placeholder: (base) => ({
      ...base,
      fontWeight: props.fontWeight ? props.fontWeight : "500",
      color: props.placeholderColor ? props.placeholderColor : "#000",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "var(--secondaryColor)",
      fontWeight: "500",
    }),
    menu: (base) => ({
      ...base,
      top: props.dropDownTop ? props.dropDownTop : "8rem",
      padding: "0",
      boxShadow: "none",
      height: "auto",
      zIndex: "2",
      position: props.position ? props.position : "absolute",
      width: props.menuWidth ? props.menuWidth : "100%",
      left: props.menuLeft && props.menuLeft,
    }),
    menuList: (base) => ({
      ...base,
      padding: "0",
      border: "none",
      height: "100%",
      borderRadius: "1.5rem",
      background: "var(--lightPrimaryColor)",
    //   maxHeight: props.maxHeight && props.maxHeight,
      "&::-webkit-scrollbar": {
        width: "10px",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "none",
        borderRadius: "0",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "var(--borderColor)",
        borderRadius: "0.7rem"
      }
    }),
    option: (base, state) => ({
      ...base,
      border: "none",
      background: state.isFocused ? "var(--primaryColor)" : "transparent",
      fontSize: "1.6rem",
      padding: "1.8rem 4rem",
      cursor: "pointer",
      color: state.isFocused ? "var(--whiteColor)" : "var(--secondaryColor)",
      "&:hover": {
        background: "var(--primaryColor)",
        color: "var(--whiteColor)",
      },
    }),
    dropdownIndicator: (base, state) => ({ ...base, display: "none" }),
    
  };
  return (
    <Select
      defaultMenuIsOpen={props.defaultMenuIsOpen}
      placeholder={props.placeholder}
      className="react-select-container"
      classNamePrefix="selectDropdown"
      name={props.name}
      id={props.name}
      value={props.value ? undefined : props.value}
      options={props.selectOptions}
      isSearchable={false}
      onChange={props.onChange}
      components={{ IndicatorSeparator: () => null }}
      formatOptionLabel={function(data) {
        return (
            <div dangerouslySetInnerHTML={{ __html: data.label }} />
        );
    }}
      styles={styles}
    />
  );
};

export default SelectDropdown;
