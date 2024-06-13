import { makeElectricContext } from "electric-sql/react";
import { Electric } from "src/generated/client";

export const { ElectricProvider, useElectric } =
  makeElectricContext<Electric>();
