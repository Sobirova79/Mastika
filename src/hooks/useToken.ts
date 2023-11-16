import { useQuery } from "@tanstack/react-query";
import apiClient from "src/main";
import { MeTypes } from "src/utils/types";
import { tokenSelector } from "src/redux/reducers/auth";
import { useAppSelector } from "src/redux/utils/types";

export const useToken = ({ enabled = true }) => {
  const token = useAppSelector(tokenSelector);
  return useQuery({
    queryKey: ["me_token"],
    queryFn: () =>
      apiClient.get("/me").then(({ data: response }) => response as MeTypes),
    enabled: !!token && enabled,
  });
};

export default useToken;
