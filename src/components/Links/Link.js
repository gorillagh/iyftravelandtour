import React from "react";
import { Link as RLink } from "react-router-dom";

const Link = (props) => {
  return (
    <>
      <RLink
        to={props.to}
        onClick={props.onClick}
        style={{
          textDecoration: props.textDecoration,
          color: props.color,
          cursor: "pointer",
          textTransform: props.textTransform,
        }}
        {...props}
      >
        {props.text}
      </RLink>
    </>
  );
};

Link.defaultProps = {
  textTransform: "capitalize",
  color: "#888800",
  text: "Link text",
  textDecoration: "none",
};
export default Link;
