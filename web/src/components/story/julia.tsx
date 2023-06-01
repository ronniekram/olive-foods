import tw, { styled } from "twin.macro";

const Wrapper = styled.section`
  ${tw`w-full bg-green-500 text-green-100`};
  ${tw`font-display text-3xl md:(text-5xl) lg:(text-6xl) xl:(text-7xl) 2xl:(text-8xl)`};
  ${tw`pt-10 pb-40 md:(pt-16 pb-52) xl:(pt-20 pb-52) 2xl:(pb-80)`};

  hanging-puncuation: first;
  background-image: url("/images/story/julia.svg");
  background-size: 50%;

  @media (min-width: 768px) {
    background-size: 34%;
  }

  @media (min-width: 1024px) {
    background-size: 25%;
  }

  @media (min-width: 1280px) {
    background-size: 25%;
  }

  ${tw`bg-no-repeat bg-right-bottom`};

  blockquote p {
    ${tw`indent-px`};
  }
`;

const JuliaChild = () => (
  <Wrapper>
    <div tw="w-full max-w-[86rem] mx-auto px-[5.3%] md:(px-[5.2%]) 2xl:(px-0)">
      <blockquote tw="flex lg:(w-10/12) 2xl:(w-11/12)">
        "<p>People who love to eat are always the best people."</p>
      </blockquote>
    </div>
  </Wrapper>
);

export default JuliaChild;
