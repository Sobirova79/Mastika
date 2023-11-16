import { useMutation } from "@tanstack/react-query";
import apiClient from "src/main";

interface Body {
  phone_number?: string;
  order_user?: string;
  extra_number?: string;
  payment_type?: 0;
  firstly_payment?: 0;
  is_delivery?: number;
  comment?: string;
  deliver_date?: number;
  address?: string;
  apartment?: string;
  home?: string;
  near_to?: string;
  department_id?: string;
  category_id?: 0;
  lat?: string;
  long?: string;
  complexity?: 0;
  filler?: {
    additionalProp1?: string;
    additionalProp2?: string;
    additionalProp3?: string;
  };
  packaging?: 0;
  images?: [string];
  color?: {
    additionalProp1?: string;
    additionalProp2?: string;
    additionalProp3?: string;
  };
  color_details?: string;
  id?: number;
}

const ordersMutation = () => {
  return useMutation(["handle_order"], async (body: Body) => {
    if (body) {
      const { data } = await apiClient.post({ url: "/v1/orders", body });
      return data;
    } else {
      const { data } = await apiClient.put({ url: "/v1/orders", body });
      return data;
    }
  });
};

export default ordersMutation;
