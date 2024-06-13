import {
  LiveResultContext,
  LiveResultUpdate,
} from "electric-sql/dist/client/model/model";
import { useLiveQuery } from "electric-sql/react";
import { useEffect, useState } from "react";
//<Res>(runQuery: LiveResultContext<Res>): LiveResultUpdate<Res>

export function useOptimizedLiveQuery<Res>(
  runQuery: LiveResultContext<Res>
): LiveResultUpdate<Res> {
  const liveQueryResults = useLiveQuery(runQuery);

  console.log("LiveQueryResults: ", liveQueryResults);
  const [results, setResults] =
    useState<LiveResultUpdate<Res>>(liveQueryResults);

  useEffect(() => {
    if (JSON.stringify(liveQueryResults) !== JSON.stringify(results)) {
      console.log("Setting results");
      setResults(liveQueryResults);
    }
  }, [liveQueryResults]);

  return results;
}
