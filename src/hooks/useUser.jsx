import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import useSWRImmutable from "swr/immutable";

export const useUser = () => {
  const router = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWRImmutable(
    router.query.id ? `${API_URL}/users/${router.query.id}` : null,
    fetcher
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
