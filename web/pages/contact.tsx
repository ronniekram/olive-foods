/* eslint-disable no-secrets/no-secrets */
import Image from "next/image";
import { NextSeo } from "next-seo";
import "twin.macro";

import { Wrapper } from "@/style/base";
import ContactForm from "@/components/contact/form";
import config from "../next-seo.config";

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
      <div tw="w-screen min-h-screen bg-orange-200 pt-16 pb-20 md:(pt-20 pb-36) xl:(pt-28 pb-48)">
        <Wrapper>
          <h1 tw="text-orange-100 text-[28px] font-display pb-8 md:(text-5xl pb-12) xl:(text-7xl pb-20)">
            Thinking about us for your next event?
          </h1>

          <div tw="flex flex-col space-y-8 xl:(flex-row space-y-0 space-x-[9%])">
            <div tw="w-full flex rounded-lg border border-orange-300 overflow-hidden h-[10.9375rem] md:(h-[17.1875rem]) xl:(h-[55.048125rem] w-[45%])">
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
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ContactPage;
