import { useMutation } from "@tanstack/react-query";
import apiClient from "src/main";

interface Body {
  username?: string;
  password?: string;
  phone_number?: string;
  role_id?: number;
  full_name?: string;
  status?: number;
}

const usersMutation = () => {
  return useMutation(["handle_user"], async (body: Body) => {
    if (body) {
      const { data } = await apiClient.post({ url: "/user", body });
      return data;
    } else {
      const { data } = await apiClient.put({
        url: "/user",
        body,
      });
      return data;
    }
  });
};

export default usersMutation;
