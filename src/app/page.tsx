"use client";

import { Weather } from "@/Components/Pages/Weather";
import { Open_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Open_Sans({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function Home() {
  return (
    <main
      className={inter.className}
      style={{ height: "100vh", width: "100vw" }}
    >
      <QueryClientProvider client={queryClient}>
        <Weather />
      </QueryClientProvider>
    </main>
  );
}
