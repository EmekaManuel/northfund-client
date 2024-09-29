import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";

interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default App;
