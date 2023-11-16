import { useMutation } from "@tanstack/react-query";
import apiClient from "src/main";

interface Body {
  name: string;
  role_id?: number;
}
const roleMutation = () => {
  return useMutation(["handle_role"], async ({ role_id, name }: Body) => {
    if (role_id) {
      const { data } = await apiClient.put({
        url: "/roles",
        params: { name, role_id },
      });
      return data;
    } else {
      const { data } = await apiClient.post({ url: "/roles", body: { name } });
      return data;
    }
  });
};

export default roleMutation;
