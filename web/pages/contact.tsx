import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import ContactForm from "@/components/contact/form";

//! ----------> COMPONENTS <----------
const ContactPage = () => {
  return (
    <div tw="w-screen min-h-screen bg-orange-200 pt-16 pb-20 md:(pt-20 pb-36) xl:(pt-28 pb-48)">
      <Wrapper>
        <h1 tw="text-orange-100 text-[28px] font-display pb-8 md:(text-5xl pb-12) xl:(text-7xl pb-20)">Thinking about us for your next event?</h1>

        <div tw="flex flex-col space-y-8 xl:(flex-row space-y-0 space-x-[9%])">
          <div tw="w-full flex rounded-lg overflow-hidden h-[10.9375rem] md:(h-[17.1875rem]) xl:(h-[55.048125rem] w-[45%])">
            <Image
              src="/images/contact/CONTACT-001.png"
              alt="Charcuterie board full of meats, cheeses, crackers and other accoutrment shwon from above on a white background"
              width={1002}
              height={1503}
              loading="eager"
              quality={100}
              style={{ objectFit: `cover`, objectPosition: `center` }}
            />
          </div>
          <ContactForm />
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactPage;
