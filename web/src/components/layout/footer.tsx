/* eslint-disable no-secrets/no-secrets */
import { useState } from "react";
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
  ${tw`bg-orange-200! text-green-100!`};
  ${tw`font-display tracking-[1px] text-base leading-[auto]`};
  ${tw`h-full px-5 py-1.5 flex items-center justify-center`};
  ${tw`transition duration-300 ease-in-out`};
  ${tw`xl:(text-xl px-6 py-1.5)`};
  ${tw`hover:(bg-orange-300!)`};
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
        id="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <Submit type="submit">
        Subscribe
      </Submit>
    </Newsletter>
  );
};

const Footer = () => {
  return (
    <footer tw="w-screen bg-green-100">
      <Wrapper tw="pt-10 pb-8 md:(py-9) xl:(pt-16 pb-12)">
        <div tw="flex flex-col space-y-5 sm:(flex-row space-y-0 justify-between items-center)">
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
          </div>
          <Link
            href="/"
            prefetch={false}
            tw="mx-auto w-40 h-[125px] md:(w-[188.57px] h-[150px] mr-0) xl:(w-[251.43px] h-[200px])"
            aria-label="Home"
          >
            <Image src="/logo-foot.png" width={321} height={247} alt="Olive Foods logo" />
          </Link>
        </div>
        <div tw="flex flex-col space-y-1.5 text-orange-200 text-xs font-sans mt-3 sm:(flex-row-reverse items-center justify-between space-y-0) md:(mt-8) lg:(text-base mt-10)">
          <p>All rights reserved, Olive Foods Company, LLC {new Date().getFullYear()}</p>
          <p tw="font-medium text-grey">
            Made with <span tw="text-orange-200">♥</span> by{" "}
            <a
              href="https://ronniebee.dev"
              target="_blank"
              rel="noreferrer"
              tw="underline transition duration-300 ease-in-out hover:(text-orange-200)"
            >
              ronnie bee
            </a>
            .
          </p>
        </div>
        <div tw="flex space-x-2 mt-3 text-xs font-medium font-sans flex-wrap md:(text-sm) lg:(text-base space-x-3) xl:(text-lg space-x-6 mt-4)">
          <a
            href="https://app.enzuzo.com/policies/privacy/ab2a1fa2-51a9-11ee-8546-1fc056a2b58d"
            target="_blank"
            rel="noreferrer"
            aria-label="Privacy Policy - Opens in new tab"
            tw="transition duration-300 ease-in-out hover:(text-orange-200)"
          >
            Privacy Policy <span tw="sr-only">(opens in new tab)</span>
          </a>
          <a
            href="https://app.enzuzo.com/policies/tos/ab2a1fa2-51a9-11ee-8546-1fc056a2b58d"
            target="_blank"
            rel="noreferrer"
            aria-label="Terms of Use - Opens in new tab"
            tw="transition duration-300 ease-in-out hover:(text-orange-200)"
          >
            Terms of Use <span tw="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
