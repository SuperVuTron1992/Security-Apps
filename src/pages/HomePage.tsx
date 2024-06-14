import React, { useState } from "react";
import { MuiFileInput } from "mui-file-input";
import { Button } from "@mui/material";
import axios from "axios";
import BoxShowContents from "../components/boxShowContents";

const HomePage: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
    type: string;
  } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const checkSubmitfileButtonPress = async (data: any) => {
    try {
      console.log("testing this");
      const response = await axios.post(
        `https://fluxdux.com/importJsonData/Stock/Properties/`,
        data
      );

      if (response.status === 200) {
        alert("File data uploaded successfully");
      }
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
    reader.onerror = (event) => {
      console.error("Error reading file:", event);
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
    if (jsonData) {
      // Example submission logic
      console.log("Submitting JSON data:", jsonData);
      checkSubmitfileButtonPress(jsonData);

      alert("JSON data submitted successfully!");
    } else {
      alert("No JSON data to submit");
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
          {jsonData ? JSON.stringify(jsonData, null, 2) : "No file content"}
        </pre>
      </>
    );
  };

  const highOrderSubmitButton = () => {
    return (
      <Button variant="contained" onClick={handleSubmit} disabled={!jsonData}>
        Submit
      </Button>
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
