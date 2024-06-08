import { Rowdies } from "next/font/google";
import { TextField } from "@/components/textfield";
import { useEffect, useState } from "react";

const rowdies = Rowdies({ subsets: ["latin"], weight: ["300"] });

export default function Home() {
  return (
    <main
      className={`bg-bg-primary flex min-h-screen flex-col items-center justify-between p-24 ${rowdies.className}`}
    >
      <div>
        <TextField placeholder="Search" />
      </div>
    </main>
  );
}
