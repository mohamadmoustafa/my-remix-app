import { createContext, useContext } from "react";
import { Client } from "../generatedCode/todoApi";

interface AppContextInterface {
  name: string;
  client: Client;
}

interface AppContextProviderProps {
  children: React.ReactNode;
}

// Provider in your app

export function createCtx<AppContextInterface>() {
  const ctx = createContext<AppContextInterface | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c)
      throw new Error(
        "useCtx from AppContext must be inside a Provider with a value"
      );
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

const [useAppContext, CtxProvider] = createCtx<AppContextInterface>();

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <CtxProvider
      value={{
        name: "John Doe",
        client: new Client("https://localhost:7166"),
      }}
    >
      {children}
    </CtxProvider>
  );
};

export { useAppContext };
