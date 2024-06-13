import { Effect } from "effect";
import { createContext } from "react";
import { Electric } from "src/generated/client";
import { DbService, DbServiceImpl } from "./DdServices";

export const DbServiceContext = createContext<DbServiceImpl | null>(null);
