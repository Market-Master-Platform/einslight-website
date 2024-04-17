const useFooter = () => {
  const navItems = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/049f7f29902670d0aad42d5687d6bfa197a35c0ae98110666af53a32f5c30bde?apiKey=d22700435c194df19375f24bbe85f4c5&",
      imageAlt: "Our offering",
      text: "Our offering",
    },
    {
      text: "Customer cases",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73cf0fff0fc51952131d27cccf822061f9d6bceb4cf9753dba54fc7771ffa18c?apiKey=d22700435c194df19375f24bbe85f4c5&",
      imageAlt: "Contact",
      text: "Contact",
    },
  ];

  return { navItems };
};

export default useFooter;
