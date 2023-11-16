import { useMutation } from "@tanstack/react-query";
import apiClient from "src/main";

interface Body {
  order_user?: string;
  phone_number?: string;
  extra_number?: string;
  payment_type?: number;
  is_delivery?: number;
  comment?: string;
  reject_reason?: string;
  created_at?: string;
  updated_at?: string;
  deliver_date?: Date | string;
  address?: string;
  apartment?: string;
  home?: string;
  near_to?: string;
  depatrment_id?: string;
  category_id?: number;
  lat?: string;
  long?: string;

  status?: number;
  id?: number;

  deny_reason?: string;
}

const orderMutation = () => {
  return useMutation(["order"], async (body: Body) => {
    if (!body.id) {
      const { data } = await apiClient.post({ url: "/v1/orders", body });
      return data;
    } else {
      const { data } = await apiClient.put({ url: "/v1/orders", body });
      return data;
    }
  });
};

export default orderMutation;
