import tw, { styled } from "twin.macro";
import type { RegisterOptions } from "react-hook-form";

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
  register: RegisterOptions;
  error?: string;
};

//! ----------> STYLES <----------
const Field = styled.input`
  ${tw`bg-green-100 text-grey`};
  ${tw`border border-green-500`};
  ${tw`w-full rounded`};
  ${tw`text-xs px-2.5 py-1`};
  ${tw`md:(text-sm px-3 py-2)`};
  ${tw`xl:(text-base px-4 py-2.5)`};
  ${tw`placeholder:(text-grey/75)`};
  ${tw`focus:(border-0 outline-2 outline-green-400)`};
`;

//! ----------> COMPONENTS <----------
const Input = ({ label, register, error, ...rest }: Props) => {
  <label tw="w-full">
    <p tw="text-grey text-xs font-medium pl-2.5 md:(text-sm pl-3) xl:(text-base pl-4)">{label}</p>
    <Field
      // {...register}
      {...rest}
      css={[error && tw`border-0 outline-orange-300`]}
    />
    <p tw="text-2xs font-bold text-orange-300 pl-2.5 md:(text-xs pl-3) xl:(pl-4)">{error}</p>
  </label>
};

export default Input;
