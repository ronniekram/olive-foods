import type { NextPage } from "next";
import tw, { styled } from "twin.macro";

import LegalHeader from "@/components/legal/header";

//! ----------> TYPES <----------
//! ----------> STYLES <----------
//! ----------> COMPONENTS <----------
const CookiePolicy: NextPage = () => {
  return (
    <>
      <LegalHeader title="Cookie Policy" />
      <article tw="w-full h-full bg-green-100"></article>
    </>
  );
};

export default CookiePolicy;
