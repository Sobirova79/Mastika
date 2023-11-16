import { useMutation } from "@tanstack/react-query";
import apiClient from "src/main";

interface Body {
  id?: number;
  name?: string;
  status?: number;
  image?: string;
}

const categoryMutation = () => {
  const contentType = "multipart/form-data";
  return useMutation(["handle_category"], async ({ id, name }: Body) => {
    if (id) {
      const { data } = await apiClient.post({
        url: "/v1/category",
        body: { name },
        contentType,
      });
      return data;
    } else {
      const { data } = await apiClient.put({
        url: "/v1/category",
        params: { name, id },
        contentType,
      });
      return data;
    }
  });
};

export default categoryMutation;
