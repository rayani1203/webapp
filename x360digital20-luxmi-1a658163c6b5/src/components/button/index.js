const Button = (props) => {
  const style = {
    width: props.width ? props.width : "100%",
    maxWidth: props.maxWidth ? props.maxWidth : "100%",
    fontSize: props.fontSize ? props.fontSize : "2rem",
    padding: props.padding ? props.padding : "1.8rem 0",
    color: props.color ? props.color : "var(--primaryColor)",
    fontWeight: props.fontWeight ? props.fontWeight : "700",
    background: props.background ? props.background : "var(--greyColor)",
    border: props.border ? props.border : "0.1rem solid var(--greyColor)",
    borderRadius: props.borderRadius ? props.borderRadius : "1.5rem",
    margin: props.margin ? props.margin : "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  };
  return (
    <button type={props.type} style={style} onClick={props.onClick}>
      {props.label}
      {props.icon ? props.icon : null}
    </button>
  );
};

export default Button;
