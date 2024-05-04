// "use client";
import { redirect } from "next/navigation";

export default function RootPage() {
  // localStorage.setItem("lang", "en");
  redirect("/en");
}
