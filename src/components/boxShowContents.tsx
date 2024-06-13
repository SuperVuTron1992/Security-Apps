import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

interface BoxShowContentsProps {
  inputWidth: number;
  inputLength: number;
  reactComponent: ReactNode;
  buttonLeft: ReactNode;
  buttonRight: ReactNode;
}

const BoxShowContents: React.FC<BoxShowContentsProps> = ({
  inputWidth,
  inputLength,
  reactComponent,
  buttonLeft,
  buttonRight,
}) => {
  return (
    <div>
      <p>Input Width: {inputWidth}</p>
      <p>Input Length: {inputLength}</p>
      <div>React Component: {reactComponent}</div>
      <div>Left Button: {buttonLeft}</div>
      <div>Right Button: {buttonRight}</div>
    </div>
  );
};

export default BoxShowContents;
