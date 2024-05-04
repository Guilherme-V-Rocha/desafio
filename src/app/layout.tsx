import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Provider from "@/util/providers";
import { GlobalStyle } from "./globals";
import { Header } from "@/app/header";
import { Main } from "./main.styles";
import { Footer } from "@/app/footer";
import { Sidebar } from "@/app/sidebar";
import { Suspense } from "react";
import StyledComponentsRegistry from "./registry";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MRK Sistemas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <Provider>
            <Header />
            <Main>{children}</Main>
            <Sidebar />
          </Provider>
          <Footer />
          <GlobalStyle />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
