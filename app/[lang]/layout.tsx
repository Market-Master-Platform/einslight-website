import CookiePopup from "@/components/CookiesPopup/CookiesPopup";
import NavbarLayout from "@/components/Navbar/NavbarLayout";
import DictionaryProvider from "@/context/dictionary-provider";
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
      <NavbarLayout>{children}</NavbarLayout>

      <CookiePopup />
    </DictionaryProvider>
  );
}
