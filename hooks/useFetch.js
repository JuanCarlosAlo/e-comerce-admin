import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';


const fetchData = async (fetchInfo, setFetchStatus,  router) => {
  if (!fetchInfo) return;

  const { url, options ,navigateTo} = fetchInfo;

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    setFetchStatus({ data, loading: false, error: undefined });
	if(navigateTo) router(navigateTo.url)
  } catch (err) {
    setFetchStatus({ data: undefined, loading: false, error: err });
  }
};

export const useFetch = (initialFetch) => {
  const [fetchStatus, setFetchStatus] = useState({
    data: undefined,
    loading: true,
    error: undefined,
  });
  const [fetchInfo, setFetchInfo] = useState(initialFetch);

  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    fetchData(fetchInfo, setFetchStatus, controller.signal, router);
    return () => controller.abort();
  }, [fetchInfo]);

  return { ...fetchStatus, setFetchInfo };
};
