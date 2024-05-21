"use client";

import { Weather } from "@/Components/Pages";
import { Open_Sans } from "next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { COLORS } from "@/Constants/theme";

const inter = Open_Sans({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function Home() {
  return (
    <main
      className={inter.className}
      style={{ height: "100%", width: "100%", background: COLORS.white }}
    >
      <QueryClientProvider client={queryClient}>
        <Weather />
      </QueryClientProvider>
    </main>
  );
}
