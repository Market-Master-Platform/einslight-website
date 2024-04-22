export interface NavItemValues {
  text: string;
  hasSubItems?: boolean;
  href?: string;
}

const useNavbar = () => {
  const navItems: NavItemValues[] = [
    {
      text: "our_offering",
      hasSubItems: true,
    },
    {
      text: "customer_cases",
      href: `en/case-study`,
    },
    {
      text: "contact",
      href: `en/contact-us`,
    },
  ];

  return { navItems };
};

export default useNavbar;
