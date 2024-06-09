import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTokenService from '../services/AuthTokenService';
import { useTheme } from '@mui/material/styles';
import { MuiFileInput } from 'mui-file-input';
import { Button, Typography } from '@mui/material';
import axios from 'axios';
import { log } from 'console';

// const HomePage: React.FC = () => {
//   const theme = useTheme();
//   const [file, setFile] = useState<any>();
//   const [jsonData, setJsonData] = useState<any>();

//   const handleChange = (newFile: any) => {
//     setFile(newFile);
//     // readFile(newFile);
//   };

//   const readFile = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const text = event.target?.result as string;
//       console.log(JSON.parse(text));
//       setJsonData(JSON.parse(text));
//     };
//   };

//   const checkSubmitfileButtonPress = async (data: any) => {
//     try {
//       // const formData = new FormData();
//       // formData.append('file', file);

//       // const getAuth = await AuthTokenService.AuthToken(PassWord);
//       const getFile = await fetch(
//         `https://fluxdux.com/importJsonData/Stock/Properties/`,
//         {
//           method: 'POST',
//           body: data,
//         },
//       );

//       if (getFile.ok) {
//         const dataPull = await getFile.json();
//         console.log('upload the File', dataPull);
//       }
//     } catch (error) {
//       console.error('Error fetching authentication data:', error);
//     }
//   };

//   // const checkSubmitfileButtonPress = async (data: any) => {
//   //   try {
//   //     const response = await axios.post(
//   //       `https://fluxdux.com/importJsonData/Stock/Properties/testingStttttufff`,
//   //       data,
//   //     );

//   //     if (response.status === 200) {
//   //       alert('File data uploaded successfully');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error uploading file data:', error);
//   //   }
//   // };

//   const handleSubmitPress = () => {
//     console.log(file);
//     const reader = new FileReader();
//     reader.onload = (file) => {
//       // const text = file.target?.LOADING as string;
//       // console.log(JSON.parse(text));
//       // setJsonData(JSON.parse(text));
//     };
//     // console.log(testing);

//     // checkSubmitfileButtonPress(jsonData);
//   };

//   return (
//     <div className="grid h-screen place-content-center">
//       <MuiFileInput
//         value={file}
//         onChange={handleChange}
//         placeholder="Click and Select File for Upload"
//       />
//       <Button
//         variant="contained"
//         style={{ backgroundColor: theme.palette.red.main, color: 'black' }}
//         onClick={handleSubmitPress}
//       >
//         !Click-to-Submit
//       </Button>
//     </div>
//   );
// };

// const HomePage: React.FC = () => {
//   const [jsonData, setJsonData] = useState<any>(null);
//   const [fileInfo, setFileInfo] = useState<{
//     name: string;
//     size: number;
//     type: string;
//   } | null>(null);

//   const checkSubmitfileButtonPress = async (data: any) => {
//     try {
//       console.log('testing this');
//       const response = await axios.post(
//         `https://fluxdux.com/importJsonData/Stock/Properties/`,
//         data,
//       );

//       if (response.status === 200) {
//         alert('File data uploaded successfully');
//       }
//     } catch (error) {
//       console.error('Error uploading file data:', error);
//     }
//   };

//   const readFile = (file: File) => {
//     setFileInfo({ name: file.name, size: file.size, type: file.type });

//     const reader = new FileReader();
//     reader.onload = (event) => {
//       try {
//         const text = event.target?.result as string;
//         const json = JSON.parse(text);
//         console.log(json);
//         setJsonData(json);
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//       }
//     };
//     reader.onerror = (event) => {
//       console.error('Error reading file:', event);
//     };
//     reader.readAsText(file);
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       readFile(file);
//     }
//   };

//   const handleSubmit = () => {
//     if (jsonData) {
//       // Example submission logic
//       console.log('Submitting JSON data:', jsonData);

//       checkSubmitfileButtonPress(jsonData);

//       alert('JSON data submitted successfully!');
//     } else {
//       alert('No JSON data to submit');
//     }
//   };

//   return (
//     <div>
//       <input type="file" accept=".json" onChange={handleFileChange} />
//       {fileInfo && (
//         <div>
//           <p>
//             <strong>File Info:</strong>
//           </p>
//           <p>Name: {fileInfo.name}</p>
//           <p>Size: {fileInfo.size} bytes</p>
//           <p>Type: {fileInfo.type}</p>
//         </div>
//       )}
//       <pre>
//         {jsonData ? JSON.stringify(jsonData, null, 2) : 'No file content'}
//       </pre>
//       <button onClick={handleSubmit} disabled={!jsonData}>
//         Submit
//       </button>
//     </div>
//   );
// };

// export default HomePage;

const FileReaderComponent: React.FC = () => {
  const [jsonData, setJsonData] = useState<any>(null);
  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: number;
    type: string;
  } | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const checkSubmitfileButtonPress = async (data: any) => {
    try {
      console.log('testing this');
      const response = await axios.post(
        `https://fluxdux.com/importJsonData/Stock/Properties/`,
        data,
      );

      if (response.status === 200) {
        alert('File data uploaded successfully');
      }
    } catch (error) {
      console.error('Error uploading file data:', error);
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
        console.error('Error parsing JSON:', error);
      }
    };
    reader.onerror = (event) => {
      console.error('Error reading file:', event);
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
      console.log('Submitting JSON data:', jsonData);
      checkSubmitfileButtonPress(jsonData);

      alert('JSON data submitted successfully!');
    } else {
      alert('No JSON data to submit');
    }
  };

  return (
    <div>
      <MuiFileInput
        value={selectedFile}
        onChange={handleFileChange}
        placeholder="Click and Select File for Upload"
      />
      {fileInfo && (
        <div>
          <Typography variant="body1">
            <strong>File Info:</strong>
          </Typography>
          <Typography variant="body2">Name: {fileInfo.name}</Typography>
          <Typography variant="body2">Size: {fileInfo.size} bytes</Typography>
          <Typography variant="body2">Type: {fileInfo.type}</Typography>
        </div>
      )}
      <pre>
        {jsonData ? JSON.stringify(jsonData, null, 2) : 'No file content'}
      </pre>
      <Button variant="contained" onClick={handleSubmit} disabled={!jsonData}>
        Submit
      </Button>
    </div>
  );
};

export default FileReaderComponent;
