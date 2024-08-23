import React from "react";

export default function Button({
  title,
  className,
  textStyle,
  leftIcon,
  rightIcon,

}) {
  return (
    <button className={`${className}`}>
      {leftIcon}

      <span className={`${textStyle}`}>{title}</span>
      {rightIcon}
     
    </button>
  );
}
