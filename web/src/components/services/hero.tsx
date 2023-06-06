import Image from "next/image";
import tw, { styled } from "twin.macro";

import { Wrapper } from "@/style/base";
import Breaker from "../general/breaker";

//! ----------> STYLES <----------
const ImageWrap = styled.div`
  ${tw`flex rounded-2xl overflow-hidden`};
  ${tw`border border-grey`};
  ${tw`h-[20.3125rem] xl:(w-[50%] h-[24.25rem] [flex-shrink: 0])`};
`;

//! ----------> COMPONENTS <----------
const ServiceHero = () => {
  return (
    <div tw="w-full bg-green-100 py-12 md:(pt-16) lg:(pt-20) 2xl:(pt-24)">
      <Wrapper tw="flex flex-col space-y-8 md:(space-y-10) xl:(space-y-14)">
        <h1 tw="font-display text-orange-200 text-[56px] leading-[50px] md:(text-7xl) xl:(text-8xl)">Meal Services</h1>
        <div tw="flex flex-col space-y-8 lg:(flex-row-reverse space-y-0)">
          <div tw="lg:(pl-8) xl:(w-[50%])">
            <p tw="text-grey text-base font-sans font-medium mb-2.5 md:(text-xl) lg:(mb-3) xl:(text-2xl) 2xl:(font-normal mb-5)">
              We understand that life can be hectic and meal planning can be overwhelming. We offer a variety of meal services to help you get delicious, high-quality meals on the table with ease.
            </p>
            <p tw="text-grey text-base font-sans font-medium md:(text-xl) xl:(text-2xl) 2xl:(font-normal)">
              Let us take the stress out of mealtime.
            </p>
          </div>
          <ImageWrap>
            <Image
              src="/images/services/SERVICES-001.png"
              alt="Glass dishes filled with fish, rice, sauce and green beans. Each item is in a separate container. The photo is from an overhead view with a white background."
              width={1366}
              height={2049}
              style={{ objectFit: `cover`, objectPosition: `center` }}
              loading="eager"
              quality={100}
            />
        </ImageWrap>
        </div>

        <p tw="text-grey font-sans font-bold text-xs md:(text-sm pb-4) lg:(text-base) xl:(text-lg) 2xl:(text-xl)">All meal services require a 72-hour advance notice. Orders should be submitted by email: <a href="mailto:olivefoods@gmail.com" tw="text-orange-200 transition duration-300 ease-in-out hover:(text-orange-300)">olivefoods@gmail.com</a></p>
        <Breaker />
      </Wrapper>
    </div>
  );
};

export default ServiceHero;
