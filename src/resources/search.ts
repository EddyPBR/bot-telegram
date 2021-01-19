import axios, { AxiosResponse } from "axios";

interface ISearchParams {
  client_name: string;
}

const search = async (params?: ISearchParams): Promise<AxiosResponse<any>> => {
  try {
    return await axios.get(`http://localhost:3000/${params.client_name}`, {
      timeout: 3000,
    });
  } catch (error) {
    return error.response;
  }
};

export default search;
