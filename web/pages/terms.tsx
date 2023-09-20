import Script from "next/script";

const TermsOfService = () => {
  return (
    <>
      <Script
        src="https://app.enzuzo.com/scripts/tos/ab2a1fa2-51a9-11ee-8546-1fc056a2b58d"
        id="__enzuzo-root-script"
        strategy="afterInteractive"
      />
      <div tw="" id="__enzuzo-root-script"></div>
    </>
  );
};

export default TermsOfService;
