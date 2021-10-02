import useSWR from "swr";

export const usePost = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
