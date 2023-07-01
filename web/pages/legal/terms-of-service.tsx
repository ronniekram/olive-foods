import type { NextPage } from "next";
import tw, { styled } from "twin.macro";

import LegalHeader from "@/components/legal/header";

//! ----------> TYPES <----------
//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const TermsOfService: NextPage = () => {
  return (
    <>
      <LegalHeader title="Terms of Service" />
      <article tw="w-full h-full bg-green-100"></article>
    </>
  );
};

export default TermsOfService;
