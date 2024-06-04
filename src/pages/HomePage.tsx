import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTokenService from '../services/AuthTokenService';
import { Button } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import { MuiFileInput } from 'mui-file-input';

const HomePage: React.FC = () => {
  const theme = useTheme();
  const [file, setFile] = useState<any>();

  const handleChange = (newFile: any) => {
    setFile(newFile);
  };

  const checkSubmitfileButtonPress = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // const getAuth = await AuthTokenService.AuthToken(PassWord);
      const getFile = await fetch(
        `https://fluxdux.com/importJsonData/Stock/Properties/testingStttttufff`,
        {
          method: 'POST',
          body: formData,
        },
      );

      if (getFile.ok) {
        const data = await getFile.json();
        alert('upload the File');
      }
    } catch (error) {
      console.error('Error fetching authentication data:', error);
    }
  };

  const handleSubmitPress = () => {
    if (file) {
      checkSubmitfileButtonPress();
    }
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
