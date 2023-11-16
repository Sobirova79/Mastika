import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { userTypes } from "src/utils/types";

export const useUser = ({
  enabled = true,
  username,
  password,
  phone_number,
  role_id,
  full_name,
  status,
  id,
}: {
  enabled?: boolean;
  username?: string;
  password?: string;
  phone_number?: number;
  role_id?: number;
  full_name?: string;
  status?: number;
  id?: number;
}) => {
  return useQuery({
    queryKey: [
      "get_user",
      username,
      password,
      phone_number,
      role_id,
      full_name,
      status,
      id,
    ],
    queryFn: () =>
      apiClient
        .get("/user", {
          username,
          password,
          phone_number,
          role_id,
          full_name,
          status,
          id,
        })
        .then(({ data: respone }) => {
          return (respone as userTypes) || null;
        }),
    enabled,
    refetchOnMount: true,
  });
};

export default useUser;
