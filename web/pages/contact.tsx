/* eslint-disable no-secrets/no-secrets */
import Image from "next/image";
import { NextSeo } from "next-seo";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import ContactForm from "@/components/contact/form";
import config from "../next-seo.config";

//! ----------> STYLES <----------
const Container = styled.article`
  ${tw`h-full bg-orange-200 pt-10 pb-24`};
  ${tw`sm:(pt-12) md:(pt-14) lg:(pt-16 pb-28)`};
  ${tw`xl:(pt-20 pb-32) 2xl:(pt-24)`};

  h1 {
    ${tw`text-green-100 font-display text-[28px]`};
    ${tw`pb-7 md:(pb-10) 2xl:(pb-14)`};
    ${tw`sm:(text-4xl) md:(text-5xl)`};
    ${tw`xl:(text-6xl) 2xl:(text-7xl)`};
    text-wrap: balance;
  }
`;

const Grid = styled.section`
  ${tw`w-full grid grid-cols-1 lg:(grid-cols-[auto, 58%])`};
  ${tw`xl:(grid-cols-[auto, 55%]) 2xl:(grid-cols-[auto, 54%])`};
  ${tw`gap-y-7 md:(gap-y-10) lg:(gap-y-0 gap-x-10)`};
  ${tw`2xl:(gap-x-14)`};
`;

//! ----------> COMPONENTS <----------
const ContactPage = () => {
  return (
    <>
      <NextSeo
        {...config}
        title="Contact Us"
        description="We're thrilled that you're interested in working with us! Please share a few details about what you're looking for, and we'll work together to create an experience that perfectly meets your needs."
        canonical="https://olivefoodscompany.com/contact"
      />
      <Container>
        <Wrapper>
          <h1 tw="text-orange-100 text-[28px] font-display pb-7 sm:(text-4xl) md:(text-5xl pb-10) xl:(text-6xl pb-20) 2xl:(text-7xl)">
            Thinking about us for your next event?
          </h1>

          <Grid>
            <div tw="w-full flex rounded-lg border-[1.5px] border-orange-300 overflow-hidden h-[10.9375rem] md:(h-[17.1875rem]) lg:(h-full)">
              <Image
                src="/images/contact/CONTACT-001.webp"
                alt="Charcuterie board full of meats, cheeses, crackers and other accoutrment shwon from above on a white background"
                width={1002}
                height={1503}
                placeholder="blur"
                blurDataURL="LhOpY_kC.9tQ%0ogf,oy?wf5MxWB"
                loading="eager"
                quality={100}
                style={{ objectFit: `cover`, objectPosition: `center` }}
                priority
              />
            </div>
            <ContactForm />
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
};

export default ContactPage;
