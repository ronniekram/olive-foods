import type { NextPage } from "next";
import tw, { styled } from "twin.macro";

import LegalHeader from "@/components/legal/header";
import Footer from "@/components/layout/footer";

//! ----------> TYPES <----------
//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <LegalHeader title="Privacy Policy" />
      <article tw="w-full h-full bg-green-100"></article>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
