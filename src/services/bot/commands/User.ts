import api from "../../api";

interface IUser {
  client_name: string;
}

class UserCommands {
  async search(params: IUser) {
    const { client_name } = params;

    try {
      const { data: result } = await api.get(
        `http://localhost:3000/${client_name}`,
        {
          timeout: 3000,
        }
      );
      return result;
    } catch (error) {
      return { data: error?.message ?? "unknown error" };
    }
  }

  async create(params: IUser) {
    const { client_name } = params;

    try {
      const { data: result } = await api.post(
        `http://localhost:3000/`,
        {
          client_name,
        },
        {
          timeout: 3000,
        }
      );
      return result;
    } catch (error) {
      return { data: error?.message ?? "unknown error" };
    }
  }
}

export default UserCommands;
