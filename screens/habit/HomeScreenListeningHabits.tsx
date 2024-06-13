import { useStore } from "@State/useStore";
import { useElectric } from "@Utils/electro";
import { useLiveQuery } from "electric-sql/react";
import { useEffect, useMemo } from "react";

export function HomeScreenListeningForHabitIds() {
  const { db } = useElectric()!;
  const setHabitsIds = useStore((state) => state.habits.setHabitIds);

  const liveQuery = useMemo(
    () =>
      db.habits.liveMany({
        select: {
          id: true,
        },
        orderBy: [
          {
            habit_order2: "asc",
          },
          {
            name: "asc",
          },
        ],
      }),
    [db]
  );

  const { results } = useLiveQuery(liveQuery);

  useEffect(() => {
    if (results === undefined || results === null) return;
    setHabitsIds(results.map((habit) => habit.id));
  }, [results, setHabitsIds]);

  return null;
}
