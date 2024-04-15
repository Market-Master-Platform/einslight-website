import Image from "next/image";
import Overview from "./pages/overview/Overview";
import Analytics from "./pages/analytics/Analytics";
import Services from "./pages/services/services";
import MainStrength from "./pages/main-strength/MainStrength";
import Partners from "./pages/partners/Partners";
import Contacts from "./pages/contacts/Contacts";
import CustomMainLayout from "./components/CustomMainLayout";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CustomMainLayout>
        {/* Page 1 */}
        <Overview />

        {/* Page 2 */}
        <Analytics />

        {/* Page 3 */}
        <Services />

        {/* Page 4 */}
        <MainStrength />

        {/* Page 5 */}
        <Partners />

        {/* Page 6 */}
        <Contacts />
      </CustomMainLayout>
    </main>
  );
}
