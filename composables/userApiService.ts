import api from "./api";
import * as ENDPOINTS from "../services/endpoint";

export const useUsersService = () => {
    return {
      async fetchUsers() {
        try {
          const { data } = await api.get(ENDPOINTS.GET_USERS);
          console.log(data);
          return data;
        } catch (err) {
        }
      },
    };
  };