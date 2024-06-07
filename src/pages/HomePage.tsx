import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTokenService from '../services/AuthTokenService';
import { Button } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import { MuiFileInput } from 'mui-file-input';
import axios from 'axios';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [file, setFile] = useState<any>();
  const [jsonData, setJsonData] = useState<any>();

  const handleChange = (newFile: any) => {
    setFile(newFile);
    readFile(newFile);
  };

  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      console.log(JSON.parse(text));
      setJsonData(JSON.parse(text));
    };
  };

  const checkSubmitfileButtonPress = async (data: any) => {
    try {
      // const formData = new FormData();
      // formData.append('file', file);

      // const getAuth = await AuthTokenService.AuthToken(PassWord);
      const getFile = await fetch(
        `https://fluxdux.com/importJsonData/Stock/Properties/testingStttttufff`,
        {
          method: 'POST',
          body: data,
        },
      );

      if (getFile.ok) {
        const dataPull = await getFile.json();
        console.log('upload the File', dataPull);
      }
    } catch (error) {
      console.error('Error fetching authentication data:', error);
    }
  };

  // const checkSubmitfileButtonPress = async (data: any) => {
  //   try {
  //     const response = await axios.post(
  //       `https://fluxdux.com/importJsonData/Stock/Properties/testingStttttufff`,
  //       data,
  //     );

  //     if (response.status === 200) {
  //       alert('File data uploaded successfully');
  //     }
  //   } catch (error) {
  //     console.error('Error uploading file data:', error);
  //   }
  // };

  const handleSubmitPress = () => {
    console.log('hasclick');
    checkSubmitfileButtonPress(jsonData);
  };

  return (
    <div className="grid h-screen place-content-center">
      <MuiFileInput
        value={file}
        onChange={handleChange}
        placeholder="Click and Select File for Upload"
      />
      <Button
        variant="contained"
        style={{ backgroundColor: theme.palette.red.main, color: 'black' }}
        onClick={handleSubmitPress}
      >
        !Click-to-Submit
      </Button>
    </div>
  );
};

export default HomePage;
