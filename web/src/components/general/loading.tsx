import tw, { css } from "twin.macro";

// ========= COMPONENT =========

/**
 * An ellipsis that animates each of its dots opacity infinitely in a sequence.
 *
 * @param props
 * @returns A React component.
 */

const common = tw`opacity-0 [animation: dot 2s infinite]`;
const LoadingDots = ({ character = `•` }: { character?: string }) => {
  return (
    <span
      css={css`
        @keyframes dot {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}
    >
      <span css={[common, tw`[animation-delay: 0s]`]}>{character}</span>
      <span css={[common, tw`[animation-delay: 0.25s]`]}>{character}</span>
      <span css={[common, tw`[animation-delay: 0.5s]`]}>{character}</span>
    </span>
  );
};

export default LoadingDots;
