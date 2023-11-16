import { useQuery } from "@tanstack/react-query";
// import { apiClient } from "..";
import { OrderType } from "../utils/types";

export const useRequests = ({
  enabled = true,
  size,
  page = 1,
  sub_id,
  body,
  department,
  sphere_status,
  is_bot,
}: {
  enabled?: boolean;
  size?: number;
  page?: number;
  sub_id?: number | string;
  department?: number | string;
  body?: any;
  sphere_status?: number;
  is_bot?: boolean;
}) => {
  return useQuery({
    queryKey: ["requests", page, sub_id, department, sphere_status],

    // refetchOnMount: true,
  });
};
export default useRequests;
