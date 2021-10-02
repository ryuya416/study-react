import useSWR from "swr";

export const useFetchArray = (url) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);

  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const API_URL = "https://jsonplaceholder.typicode.com";

export const useComments = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useFetchArray(`${API_URL}/comments`, fetcher);
};

export const usePosts = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useFetchArray(`${API_URL}/posts`, fetcher);
};

export const useUsers = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useFetchArray(`${API_URL}/users`, fetcher);
};

export const useCommentsByPostsId = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useFetchArray(id ? `${API_URL}/comments?postId=${id}` : null, fetcher);
};

export const usePostsByUserId = (id) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  return useFetchArray(id ? `${API_URL}/posts?userId=${id}` : null, fetcher);
};
