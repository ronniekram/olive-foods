import type { NextPage } from "next";
import tw, { styled } from "twin.macro";

import LegalHeader from "@/components/legal/header";
import Footer from "@/components/layout/footer";

//! ----------> TYPES <----------
//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const CookiePolicy: NextPage = () => {
  return (
    <>
      <LegalHeader title="Cookie Policy" />
      <article tw="w-full h-full bg-green-100"></article>
      <Footer />
    </>
  );
};

export default CookiePolicy;
