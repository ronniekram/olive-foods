import Image from "next/image";
import { NextSeo } from "next-seo";
import tw, { styled } from "twin.macro";

import { Wrapper as W } from "@/style/base";
import OurStory from "@/components/story/story";
import TwoCol, { ContactCols} from "@/components/story/two-col";
import JuliaChild from "@/components/story/julia";
import config from "../next-seo.config";

const Wrapper = styled(W)`
  ${tw`flex flex-col space-y-8`};
  ${tw`font-sans text-sm lg:(text-base) xl:(text-xl)`};
  ${tw`md:(flex-row-reverse items-center space-y-0)`};
`;

const Story = () => {
  return (
    <>
      <NextSeo
        {...config}
        title="Our Story"
        description="Phillip & Lauren Dekanick - Owners & Founders of Olive Foods Catering Company"
        canonical="https://olivefoodsco.com/our-story"
      />
      <OurStory />
      <TwoCol
        heading="Food is universal."
        text={[`It has the power to connect people from all walks of life and corners of the world. It is a fundamental part of human culture, and it has been for thousands of years.`, `Sharing meals with family, friends and even strangers is our favorite way to create connections and build relationships.`]}
        color="green"
        img="/images/story/PEAR.png"
        alt="Minimalist flat line drawing of a pear with a green cicle in the background"
        imgLeft
      />
      <div tw="bg-green-100 text-green-500 pt-5 pb-10 md:(pt-10 pb-14) xl:(pt-4 pb-20)">
        <Wrapper>
          <div tw="border border-blue-300 rounded-2xl overflow-hidden flex h-[18.75rem] md:(w-[50%] h-[20rem]) xl:(h-[26.5rem])">
            <Image
              src="/images/story/STORY-004.png"
              alt="A married couple wearing aprons and reading cookbooks while sitting on couch cushions"
              width={1423}
              height={966.5}
              loading="lazy"
              style={{ objectFit: `cover`, objectPosition: `center` }}
            />
          </div>

          <div tw="flex flex-col space-y-4 md:(pr-10 w-[60%]) lg:(pr-14 w-[50%]) xl:(space-y-6 pr-16)">
            <p>Food has a remarkable ability to unite people, bridge cultural divides, and create a sense of community. It allows us to celebrate our differences and find common ground. Sharing food is not just about a meal, but also about sharing our stories, traditions, and values with others.</p>
            <p>
              The belief that food nourishes both body and soul is rooted in the idea that it's not just fuel, but a source of comfort, joy, and creative expression. It enables us to explore new flavors, cuisines, and cultures, and enjoy the pleasures of the table.
            </p>
          </div>
        </Wrapper>
      </div>
      <TwoCol
        heading="A meal is about more than just eating."
        text={[`We're committed to crafting an experience your guests will always remember.`]}
        color="blue"
        img="/images/story/AVOCADO.png"
        alt="Minimalist flat line drawing of an avocado with a blue circle in the background"
      />
      <ContactCols />
      <TwoCol
        heading="Let us bring your vision to life."
        text={[`Whether you're planning a corporate event, a birthday party or an intimate dinner, we work closely with you to curate a menu and experience unique to your needs.`]}
        color="orange"
        img="/images/story/CARROT.png"
        alt="Minimalist flat line drawing of a carrot with an orange circle in the background"
      />
      <JuliaChild />
    </>
  );
};

export default Story;
