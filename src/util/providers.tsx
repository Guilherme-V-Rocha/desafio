"use client";

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";
import { SidebarProvider, ListProductsProvider } from "@/contexts";
import { theme } from "@/styles/theme";

export default function Provider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
        <ThemeProvider theme={theme}>
          <ListProductsProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </ListProductsProvider>
        </ThemeProvider>
      </StyleSheetManager>
    </QueryClientProvider>
  );
}
