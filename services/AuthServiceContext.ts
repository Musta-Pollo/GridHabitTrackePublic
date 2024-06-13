import { createContext } from "react";
import { AuthServiceImpl } from "./AuthService";

export const AuthServiceContext = createContext<AuthServiceImpl | null>(null);
