import React, { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { Button } from "@mui/material";
import { RootState, AppDispatch } from "../states/store";
import { useSelector, useDispatch } from "react-redux";
import BoxShowContents from "../components/boxShowContents";
import { addAFile } from "../features/uploadSlice";
import axios from "axios";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const files = useSelector((state: RootState) => state.upload.uploadData);
  const [jsonData, setJsonData] = useState<any>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
    type: string;
  } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const checkSubmitfileButtonPress = async (data: any, fileName: String) => {
    try {
      const requestData = {
        data,
        fileName,
      };
      const response = await axios.post(
        `https://fluxdux.com/importJsonData/Stock/Properties/`,
        requestData
      );
    } catch (error) {
      console.error("Error uploading file data:", error);
    }
  };

  const readFile = (file: File) => {
    setFileInfo({ name: file.name, size: file.size, type: file.type });

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const json = JSON.parse(text);

        setJsonData(json);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      setSelectedFile(file);
      readFile(file);
    }
  };

  const handleSubmit = () => {
    if (jsonData && fileInfo) {
      // checkSubmitfileButtonPress(jsonData, fileInfo.name);
      console.log(jsonData);
      dispatch(addAFile({ fileName: files }));
      alert(fileInfo.name + ": submitted successfully!");
    }
  };

  const highOrderMuiFileInput = () => {
    return (
      <>
        <MuiFileInput
          value={selectedFile}
          onChange={handleFileChange}
          placeholder="Click and Select File for Upload"
        />

        <pre>
          {jsonData && fileInfo
            ? "Loaded " + fileInfo.name + " Data"
            : "No file content"}
        </pre>
      </>
    );
  };

  const highOrderSubmitButton = () => {
    return (
      <Button variant="contained" onClick={handleSubmit} disabled={!jsonData}>
        Submit
      </Button>

      // <Button
      //   variant="contained"
      //   onClick={() => dispatch(addAFile({ fileName: jsonData }))}
      //   disabled={!jsonData}
      // >
      //   Submit
      // </Button>
    );
  };
  const resetButton = () => {
    return <></>;
  };

  return (
    <div className="grid h-screen place-content-center">
      <BoxShowContents
        headerCard={"Select & Submit File"}
        inputWidth={500}
        inputLength={500}
        reactComponent={highOrderMuiFileInput()}
        buttonLeft={highOrderSubmitButton()}
        buttonRight={resetButton()}
      />
    </div>
  );
};

export default HomePage;
