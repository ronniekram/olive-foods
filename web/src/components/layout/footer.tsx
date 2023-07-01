import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import tw, { styled } from "twin.macro";
import { BsTiktok, BsInstagram, BsEnvelopeHeart } from "react-icons/bs";
import axios from "axios";

import { Wrapper } from "@/style/base";

//! ----------> STYLES <----------
const Newsletter = styled.form`
  ${tw`flex items-center space-x-0`};
  ${tw`border bg-white border-orange-200 rounded`};
  ${tw`w-full h-[fit-content]`};
  ${tw`overflow-hidden`};
`;

const Input = styled.input`
  ${tw`w-full h-full flex items-center`};
  ${tw`rounded-l px-4 py-[5px]`};
  ${tw`text-sm text-grey font-sans`};
  ${tw`xl:(text-base py-2.5)`};
`;

const Submit = styled.button`
  ${tw`w-[fit-content]`};
  ${tw`bg-orange-200 text-orange-100`};
  ${tw`font-display tracking-[1px] text-base leading-[auto]`};
  ${tw`h-full px-5 py-1.5 flex items-center justify-center`};
  ${tw`xl:(text-xl px-6 py-1.5)`};
`;

const Social = styled.a`
  ${tw`text-orange-200 hover:(text-blue-200)`};
  ${tw`transition duration-300 ease-in-out`};
  ${tw`text-2xl xl:(text-3xl)`};
`;

//! ----------> COMPONENTS <----------
const SignUp = () => {
  const [email, setEmail] = useState<string>(``);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (email.trim().length > 0) {
      try {
        const resp = await axios.post(`/api/newsletter`, { email });
        setEmail(`Thanks!`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Newsletter onSubmit={handleSubmit} id="subscribe">
      <label tw="sr-only" htmlFor="email">
        Email Address
      </label>
      <Input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Submit type="submit">Subscribe</Submit>
    </Newsletter>
  );
};

const Footer = () => {
  const legal = [
    {
      label: `Privacy Policy`,
      href: `/legal/privacy`,
    },
    {
      label: `Terms of Service`,
      href: `/legal/terms-of-service`,
    },
    {
      label: `Cookie Policy`,
      href: `/legal/cookie`,
    },
  ];

  return (
    <footer tw="w-screen bg-green-100">
      <Wrapper tw="pt-10 pb-8 md:(py-9) xl:(pt-16 pb-12)">
        <div tw="flex flex-col space-y-5 md:(flex-row space-y-0 justify-between items-center)">
          <div tw="flex flex-col space-y-5 w-full md:(w-[50.75%] space-y-4) xl:(w-[41%] space-y-6) 2xl:(w-[33.6%])">
            <h2 tw="text-orange-200 font-display text-[22px] md:(text-2xl) xl:(text-3xl)">
              Hungry for more? Join our list
            </h2>
            <SignUp />
            <ul tw="flex items-center space-x-3 md:(space-x-4) xl:(space-x-8) text-orange-200">
              <li>
                <Social
                  href="https://tiktok.com/@olivefoodsco"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="TikTok"
                >
                  <BsTiktok />
                </Social>
              </li>
              <li>
                <Social
                  href="https://instagram.com/olivefoodsco"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <BsInstagram />
                </Social>
              </li>
              <li>
                <Social
                  href="mailto:olivefoodsco@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Email"
                  tw="text-3xl xl:(text-4xl)"
                >
                  <BsEnvelopeHeart />
                </Social>
              </li>
            </ul>

            <ul tw="flex items-center space-x-2.5 text-orange-200 text-sm font-sans font-medium lg:(text-base) xl:(text-lg space-x-4)">
              {legal.map((page) => (
                <li key={page.label} tw="hover:(underline)">
                  <Link href={page.href} target="_blank" rel="noreferrer">
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div tw="flex flex-col items-center">
            <Link
              href="/"
              prefetch={false}
              tw="w-40 h-[125px] md:(w-[188.57px] h-[150px] mr-0) xl:(w-[251.43px] h-[200px])"
              aria-label="Home"
            >
              <Image src="/logo-foot.png" width={321} height={247} alt="Olive Foods logo" />
            </Link>
            <p tw="text-orange-200 text-xs font-sans xl:(text-base)">
              All rights reserved, Olive Foods Company, LLC {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
