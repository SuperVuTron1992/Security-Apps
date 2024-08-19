import axios from 'axios'
import { IStringData } from '../constFeatures/constantData';

const postUpLoadFile = async (data: any, fileName: string) =>{
     const requestData = {
        data,
        fileName,
      };
      const response = await axios.post(
        `https://fluxdux.com/importJsonData/Stock/Properties/`,
        requestData
      );
    return response.data;
} 

const getDataFrom = async(data: null| string): Promise<IStringData[] | undefined> =>{
    const response = await axios.get(
        `https://fluxdux.com/getfiledData`,
    )
    return  response.data;
}

const UpLoadfilesPost = {
    postUpLoadFile,
    getDataFrom
}

export default UpLoadfilesPost
