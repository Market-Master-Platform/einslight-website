import NavbarLayout from "@/components/Navbar/NavbarLayout";
import DictionaryProvider from "@/context/dictionary-provider";
import NavbarProvider from "@/context/navbar-provider";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionary";

export default async function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(params.lang);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <NavbarProvider>
        <NavbarLayout params={params}>{children}</NavbarLayout>
      </NavbarProvider>
    </DictionaryProvider>
  );
}
