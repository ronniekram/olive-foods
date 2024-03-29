import tw, { styled } from "twin.macro";

/**
 * A standard input field.
 *
 * @param props
 * @returns A React component.
 */

//! ----------> TYPES <----------
type InputProps = JSX.IntrinsicElements[`input`];

type Props = InputProps & {
  label: string;
  register: any;
  error?: string;
};

type AreaProps = JSX.IntrinsicElements[`textarea`] & {
  label: string;
  register: any;
  error?: string;
};

//! ----------> STYLES <----------
const Field = styled.input`
  ${tw`bg-green-100 text-grey`};
  ${tw`border border-green-500`};
  ${tw`w-full rounded font-sans!`};
  ${tw`text-sm px-2.5 py-2`};
  ${tw`sm:(text-base px-3 py-1.5)`};
  ${tw`xl:(text-lg px-4)`};
  ${tw`placeholder:(text-grey/75)`};
  ${tw`focus:(border-0 outline-2 outline-green-400)`};
`;

const Area = styled.textarea`
  ${tw`bg-green-100 text-grey`};
  ${tw`border border-green-500`};
  ${tw`w-full rounded resize-none font-sans!`};
  ${tw`text-sm px-2.5 py-2`};
  ${tw`sm:(text-base px-3 py-1.5)`};
  ${tw`xl:(text-lg px-4)`};
  ${tw`placeholder:(text-grey/75)`};
  ${tw`focus:(border-0 outline-2 outline-green-400)`};
`;

//! ----------> COMPONENTS <----------
export const TextArea = ({ label, register, error, ...rest }: AreaProps) => {
  return (
    <label tw="w-full h-fit">
      <p tw="text-green-500 text-sm font-medium pl-2.5 md:(pl-3 text-base) xl:(text-lg pl-4)">
        {label}
      </p>
      <Area {...rest} {...register} css={[error && tw`border-0 outline outline-orange-300`]} />
      <p tw="text-2xs h-3.5 font-semi text-orange-300 pl-2.5 mt-1 md:(text-xs pl-3 mt-0 h-6) xl:(pl-4)">
        {error}
      </p>
    </label>
  );
};

const Input = ({ label, register, error, ...rest }: Props) => {
  return (
    <label tw="w-full h-fit">
      <p tw="text-green-500 text-sm font-medium pl-2.5 md:(pl-3 text-base) xl:(text-lg pl-4)">
        {label}
      </p>
      <Field {...rest} {...register} css={[error && tw`border-0 outline outline-orange-300`]} />
      <p tw="text-2xs h-3.5 font-semi text-orange-300 pl-2.5 mt-1 md:(text-xs pl-3 mt-0 h-6) xl:(pl-4)">
        {error}
      </p>
    </label>
  );
};

export default Input;
