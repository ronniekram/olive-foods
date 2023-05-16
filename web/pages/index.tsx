import Image from "next/image";
import "twin.macro";

const HomePage = () => {
  return (
    <div tw="w-screen min-h-screen flex flex-col space-y-7 items-center justify-center bg-green-100" id="outer">
      <h1 tw="font-display! text-5xl text-orange-200 text-center" id="headline">Olive Foods Catering Co.</h1>
      <h2 tw="font-sans text-blue-200 text-2xl text-center" id="sub-headline">Minneapolis, MN</h2>
      <div tw="w-1/4 mx-auto" id="fruit-basket">
        <Image src="/images/story/AVOCADO.png" width={1002} height={837} alt="Simple line drawing of an avocado on a circular blue background." id="avocado" />
      </div>
    </div>
  );
};

export default HomePage;
