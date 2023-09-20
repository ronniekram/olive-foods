import Script from "next/script";

const PrivacyPolicy = () => {
  return (
    <>
      <Script
        src="https://app.enzuzo.com/scripts/privacy/ab2a1fa2-51a9-11ee-8546-1fc056a2b58d"
        id="__enzuzo-root-script"
        strategy="afterInteractive"
      />
      <div tw="" id="__enzuzo-root-script"></div>
    </>
  );
};

export default PrivacyPolicy;
