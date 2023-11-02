import svg from '../../../../../public/image2vector.svg';
import Image from 'next/image';
export default function Logo() {
  return (
    <a href="" className="flex items-center m-0 p-0">
      <Image
        className="object-cover w-[50px] sm:w-[50px]"
        src={svg}
        alt="Wolt"
      />
      <h1 className="text-2xl sm:text-2xl font-bold tracking-wide leading-none logo ml-1">
        STORO GRILL
      </h1>
    </a>
  );
}
