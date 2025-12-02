import Image from 'next/image';
import hero from '../../../../public/meny/hero.jpg';
import OrderWith from './orderWith';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <div className="w-full relative h-[50vh] sm:h-[60vh] lg:h-[50vh] hero_img">
        <div className="absolute inset-0 bg-[#262626] opacity-50 z-10"></div>
        <Image
          className="object-cover w-full h-full"
          src={hero}
          alt="pizza, burger, calzone, kebab"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />

        <div className="absolute inset-0 text-white font-extrabold flex flex-col justify-center items-center hero z-20">
          <div className="flex flex-col justify-center my-auto px-4 sm:px-6 text-hero">
            <h2 className="hero-h2 text-3xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-none text-white lg:text-5xl flex justify-start sm:justify-center mb-4">
              Tenk globalt, smak lokalt
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-white flex justify-center mb-4 italic">
              Cheesy pizza, homestyle burgers & smakfull kebab
            </p>
            <div className="flex flex-row space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a
                href="#meny"
                className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400 mb-2 lg:mb-14"
              >
                Se vår meny
              </a>
            </div>
          </div>
        </div>
      </div>
      <OrderWith />
    </section>
  );
}