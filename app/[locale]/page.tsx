import Navbar from "@/components/Navbar/Navbar";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-[#9c0000]">
      <Navbar />
    </main>
  );
}
