import type { NextPage } from "next";
import tw, { styled } from "twin.macro";

import LegalHeader from "@/components/legal/header";
import Footer from "@/components/layout/footer";

//! ----------> TYPES <----------
//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const TermsOfService: NextPage = () => {
  return (
    <>
      <LegalHeader title="Terms of Service" />
      <article tw="w-full h-full bg-green-100"></article>
      <Footer />
    </>
  );
};

export default TermsOfService;
