import Link from "next/link";
import format from "date-fns/format";
import tw, { styled } from "twin.macro";
import { FiDownload } from "react-icons/fi";

import { Menu, menus } from "@/components/catering/section";

//! ----------> TYPES <----------
type Props = {
  label: string | JSX.Element;
  outline?: boolean;
  icon?: JSX.Element;
};

export type ButtonProps = Props & {
  type: `button` | `reset` | `submit`;
  onClick?: () => void;
};

export type LinkProps = Props & {
  href: string;
  external?: boolean;
};

//! ----------> STYLES <----------
const size = tw`px-7 py-1.5 md:(px-8) xl:(px-10)`;
const text = tw`font-display leading-[1.25rem] tracking-[1px] md:(text-lg leading-[1.5rem]) xl:(text-xl)`;

const style = tw`transition duration-300 ease-in-out flex items-center rounded-[36px] w-[fit-content]`;

const solid = tw`bg-orange-200 text-orange-100 hover:(bg-orange-300)`;
const outlineStyle = tw`text-orange-200 border-orange-200 border-2 hover:(border-orange-300 text-orange-300)`;

const Download = styled.a`
  ${tw`transition duration-300 ease-in-out`};
  ${tw`w-fit`};
  ${tw`flex items-center space-x-1`};
  ${tw`px-6 py-1 md:(px-8) xl:(px-10)`};
  ${tw`border-[1.5px] border-orange-200 rounded-[36px]`};
  ${tw`font-sans font-semi text-xs text-orange-200`};
  ${tw`md:(text-sm)`};
  ${tw`hover:(border-blue-200 text-blue-200)`};
`;

//! ----------> COMPONENTS <----------
export const Button = ({ label, type = `button`, outline, icon, onClick }: ButtonProps) => {
  const styles = outline ? [size, text, style, outlineStyle] : [size, text, style, solid];

  return (
    <button type={type} css={styles} onClick={onClick}>
      {label}
      {icon ? <span tw="ml-1.5 lg:(ml-2)">{icon}</span> : <></>}
    </button>
  );
};

export const LinkButton = ({ label, outline, icon, href, external }: LinkProps) => {
  const styles = outline ? [size, text, style, outlineStyle] : [size, text, style, solid];

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" css={styles}>
      {label} {icon}
    </a>
  ) : (
    <Link href={href} prefetch={false} css={styles}>
      {label}
      {icon}
    </Link>
  );
};

export const MenuButton = ({ menu, label }: { menu: Menu; label: string }) => {
  // const href = `/api/pdf?href=${menus[menu].href}&filename=${menus[menu].filename}`;

  return (
    <Download
      href={`/menus/${menu}.pdf`}
      download={`${menus[menu].filename}-${format(new Date(), `MMddyyy`)}.pdf`}
    >
      <FiDownload tw="mr-1" size={16} />
      {label}
    </Download>
  );
};
