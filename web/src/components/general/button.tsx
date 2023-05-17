import Link from "next/link";
import tw from "twin.macro";

//! ----------> TYPES <----------
type Props = {
  label: string;
  outline?: boolean;
  icon?: JSX.Element;
};

export type ButtonProps = Props &{
  type: `button` | `reset` | `submit`;
  onClick?: () => void;
};

export type LinkProps = Props & {
  href: string;
  external?: boolean;
};

//! ----------> STYLES <----------
const size = tw`px-7 py-1.5 md:(px-8) xl:(px-10 py-2)`;
const text = tw`font-display leading-[1.25rem] tracking-[1px] md:(text-xl leading-[1.5rem]) xl:(text-2xl)`;

const style = tw`transition duration-300 ease-in-out flex items-center space-x-1 rounded-[36px] w-[fit-content]`;

const solid = tw`bg-orange-200 text-orange-100 hover:(bg-orange-300)`;
const outlineStyle = tw`text-green-100 border-green-100 border hover:(outline-1 outline-green-100)`;

//! ----------> COMPONENTS <----------
export const Button = ({ label, type = `button`, outline, icon, onClick }: ButtonProps) => {
  const styles = outline ? [size, text, style, outlineStyle] : [size, text, style, solid];

  return (
    <button type={type} css={styles} onClick={onClick}>
      {label}
      {icon}
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
