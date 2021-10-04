import { API_URL } from "src/utils/const";
import useSWR from "swr";

export const usePost = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(id ? `${API_URL}/posts/${id}` : null, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
