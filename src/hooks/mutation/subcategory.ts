import { useMutation } from "@tanstack/react-query";
import apiClient from "src/main";

interface Body {
  name: string;
  id?: number;
}

const SubCategoryMutation = () => {
  return useMutation(["handle_subcategory"], async (body: Body) => {
    if (!body.id) {
      const { data } = await apiClient.post({ url: "/v1/sub/category", body });
      return data;
    } else {
      const { data } = await apiClient.put({ url: "/v1/sub/category", body });
      return data;
    }
  });
};

export default SubCategoryMutation;
