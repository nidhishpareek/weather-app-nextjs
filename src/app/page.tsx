"use client";

import { Weather } from "@/Components/Pages/Weather";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function Home() {
  return (
    // <main>
    <QueryClientProvider client={queryClient}>
      <Weather />
    </QueryClientProvider>
    // </main>
  );
}
