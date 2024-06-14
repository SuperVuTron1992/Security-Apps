import React, { ReactNode } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface BoxShowContentsProps {
  headerCard: string;
  inputWidth: number;
  inputLength: number;
  reactComponent: ReactNode;
  buttonLeft: ReactNode;
  buttonRight: ReactNode;
}

const BoxShowContents: React.FC<BoxShowContentsProps> = ({
  headerCard,
  inputWidth,
  inputLength,
  reactComponent,
  buttonLeft,
  buttonRight,
}) => {
  const theme = useTheme();
  return (
    <>
      <Card sx={{ maxWidth: inputWidth, maxHeight: inputLength }}>
        <CardContent sx={{ padding: 0 }}>
          <div
            className="flex"
            style={{
              backgroundColor: theme.palette.green.main,
              color: "white",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                marginLeft: "10px",
              }}
            >
              {headerCard}
            </div>
          </div>
          <div className="pl-4 pr-4">{reactComponent}</div>

          <div className="flex w-max gap-4 pl-4">
            <div>{buttonLeft}</div>
            <div>{buttonRight}</div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default BoxShowContents;
