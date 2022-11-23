import { useEffect, lazy, Suspense } from "react";
import { STATS_GET } from "../../api";
import Loading from "../../Helper/Loading";
import Error from "../../Helper/Error";
import useFetch from "../../Hooks/useFetch";
const UserStatsGraph = lazy(() => import('./userStatsGraph'));

const UserStats = () => {
  const {data, error, loading, request} = useFetch();

  useEffect(() => {
    async function getData () {
      const {url, options} = STATS_GET();
      await request(url, options);
    }

    getData();

  }, [request]);
  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if (data && data.length > 0) return (
    <Suspense fallback={<div></div>}>
      <UserStatsGraph data={data} />
    </Suspense>
  );
  return <p className="feed-end"> Faça uma postagem para ver as estatísticas do seu perfil </p>
}

export default UserStats;