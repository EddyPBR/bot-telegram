import api from "../../api";

interface IUser {
  client_name: string;
}

class UserCommands {
  async search(params: IUser) {
    const { client_name } = params;

    try {
      const response = await api.get(`http://localhost:3000/${client_name}`, {
        timeout: 3000,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }

  async create(params: IUser) {
    const { client_name } = params;

    try {
      const response = await api.post(`http://localhost:3000/`, {
        client_name
      }, {
        timeout: 3000,
      });
      return response;
    } catch (error) {
      return error.response;
    }
  }
}

export default UserCommands;
