import svg from '../../../../../public/image2vector.svg';
import Image from 'next/image';
export default function Logo() {
  return (
    <a href="/" className="flex items-center m-0 p-0 min-w-0">
      <Image
        className="object-cover overflow-hidden"
        src={svg}
        width={40}
        height={40}
        alt="Storo Grill logo"
      />
      <h1 className="text-xl  font-bold tracking-wide leading-none logo ml-1 truncate">
        STORO GRILL
      </h1>
    </a>
  );
}