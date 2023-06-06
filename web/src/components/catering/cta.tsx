import tw, { styled } from "twin.macro";

import { Wrapper as W } from "@/style/base";

//! ----------> STYLES <----------
type Props = {
  title: string;
  body: JSX.Element[];
  bg: string;
};

//! ----------> STYLES <----------
const Wrapper = styled(W)(({ bg } : { bg: string }) => [
  tw`bg-blue-200 text-blue-100`,
  tw`py-10 my-10 lg:(py-16) xl:(py-20)`,
  tw`flex flex-col space-y-4 md:(space-y-8)`,
  `background-image: url(${bg});`,
  `background-repeat: no-repeat;`,
  `background-position: center right`,
  `background-size: 39%;`,
]);

//! ----------> COMPONENTS <----------
const CateringCTA = ({ title, body, bg }: Props) => {
  return (
    <div tw="w-full bg-blue-200">
      <Wrapper bg={bg}>
        <h3 tw="font-display text-3xl md:(text-5xl) lg:(text-6xl)">{title}</h3>
        <div tw="flex flex-col space-y-4 font-sans font-medium text-sm md:(text-lg w-10/12) lg:(text-xl w-3/4 space-y-5) xl:(text-2xl w-7/12 space-y-7)">
          {body.map((x, i) => (
            <div key={`body-${i}`}>
              {x}
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default CateringCTA;
