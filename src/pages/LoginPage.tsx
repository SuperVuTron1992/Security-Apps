import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthTokenService from "../services/AuthTokenService";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import BoxShowContents from "../components/boxShowContents";

const LoginPage: React.FC = () => {
  const [UserEmail, setUserEmail] = useState<String>();
  const [PassWord, setPassWord] = useState<String>();
  const theme = useTheme<any>();

  let navigate = useNavigate();

  // check the input that the user input information via check submit button
  const checkSubmiteButton = async () => {
    try {
      const getAuth = await AuthTokenService.AuthToken(PassWord);
      navigate(`${getAuth.jwt}/HomePage/`);
    } catch (error) {
      console.error("Error fetching authentication data:", error);
    }
  };

  // listen to the enter button was enter
  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      checkSubmiteButton();
    }
  };

  // check the forgot password button and link to a new forget password page
  const checkForgotPasswordButton = () => {
    // navigate("/ForgotPassWordPage");
    console.log("testing Stuff");
  };

  const userAndPassWordField = () => {
    return (
      <>
        <div className="mb-8">
          <input
            className=" h-16 w-80 border-solid border-2 border-black "
            placeholder="Email"
            onChange={(event) => setUserEmail(event.target.value)}
          />
        </div>

        <div className="mb-8">
          <input
            className=" h-16 w-80 border-solid border-2 border-black"
            placeholder="Password"
            onChange={(event) => setPassWord(event.target.value)}
            type="password"
            onKeyDown={handleKeyPress}
          />
        </div>
      </>
    );
  };

  const submitButton = () => {
    return (
      <>
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.green.main,
            color: "white",
          }}
          onClick={checkSubmiteButton}
        >
          {" "}
          Submit
        </Button>
      </>
    );
  };

  const resetButton = () => {
    return <></>;
  };

  return (
    <div className="grid h-screen place-content-center">
      <BoxShowContents
        headerCard={"User Login"}
        inputWidth={500}
        inputLength={500}
        reactComponent={userAndPassWordField()}
        buttonLeft={submitButton()}
        buttonRight={resetButton()}
      />
    </div>
  );
};

export default LoginPage;
