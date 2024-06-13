//import { useElectric } from "@Utils/electro";
//import { SatelliteProcess } from "electric-sql/satellite";
//import { isDataChange } from "electric-sql/util";
//import { useEffect } from "react";

import { DbServiceContext } from "@Services/DbServiceContext";
import { DbService } from "@Services/DdServices";
import { handleDataChanges } from "@Services/notification_functions";
import { useElectric } from "@Utils/electro";
import { Effect } from "effect";
import { ChangeNotification } from "electric-sql/dist/notifiers";
import { useContext, useEffect } from "react";

//function DataChangeMonitor() {
//  const electric = useElectric()!;

//  useEffect(() => {
//    const satellite = electric.satellite as SatelliteProcess;
//    const satelliteClient = satellite.client;
//    if (!satelliteClient) {
//      console.warn("satellite client couldn't be found");
//      return;
//    }

//    return satelliteClient.subscribeToTransactions(async (notification) => {
//      for (const change of notification.changes) {
//        if (isDataChange(change)) {
//          // only process DML
//          console.log("change:", change);
//        }
//      }
//    });
//  }, [electric]);

//  return null;
//}

export function DataChangeMonitor() {
  const electric = useElectric()!;

  const dbService = useContext(DbServiceContext)!;
  useEffect(() => {
    const notifier = electric.notifier;
    const handleChange = async (notification: ChangeNotification) => {
      console.log("Handling data changes out");
      await handleDataChanges(notification).pipe(
        Effect.provideService(DbService, dbService),
        Effect.tap(() => console.log("Handling data changes out in pipe")),
        Effect.runPromise
      );
    };

    return notifier.subscribeToDataChanges(handleChange);
  }, [electric]);

  return null;
}
