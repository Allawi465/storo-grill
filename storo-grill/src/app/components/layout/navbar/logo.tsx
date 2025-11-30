import svg from '../../../../../public/image2vector.svg';
import Image from 'next/image';
export default function Logo() {
  return (
    <a href="/" className="flex items-center m-0 p-0 min-w-0">
      <Image
        className="object-cover w-[50px] sm:w-[50px]"
        src={svg}
        alt="Storo Grill logo"
      />
      <h1 className="text-2xl font-bold tracking-wide leading-none logo ml-1 truncate">
        STORO GRILL
      </h1>
    </a>
  );
}