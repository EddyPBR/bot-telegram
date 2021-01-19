import axios, { AxiosResponse } from "axios";

const status = async (): Promise<AxiosResponse<any>> => {
  try {
    return await axios.get(`https://www.google.com.br/`, { timeout: 3000 });
  } catch (error) {
    return error;
  }
};

export default status;
