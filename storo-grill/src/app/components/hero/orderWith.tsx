import Image from 'next/image';
import foodora from '../../../../public/foodora.png';
import wolt from '../../../../public/Wolt.png';

export default function OrderWith() {
  return (
    <div className="bg-[#FFFFFF] h-auto sm:h-3/6 overflow-hidden order_with m-auto">
      <div className="gap-8 sm:gap-16 items-center h-full py-8 sm:py-12 px-4 mx-auto sm:grid sm:grid-cols-2 lg:px-6 max-w-7xl">
        <div className="font-light text-[#141414] sm:text-lg ml-0 sm:ml-3">
          <h2 className="order_with_h2 text-3xl sm:text-4xl font-bold tracking-tight leading-none lg:text-6xl text-[262626]">
            Bestill din favorittmat nå!
          </h2>
          <p className="my-4 text-black text-base sm:text-lg md:text-2xl sm:my-6">
            Du kan enkelt bestille mat hos oss. Ring oss direkte{' '}
            <a
              className="no-underline hover:underline underline-offset-4 transition"
              href="tel:46750757"
            >
              46 75 07 57
            </a>
            , eller benytt deg av våre leveringstjenester med{' '}
            <a
              className="text-[#D70F64] hover:underline underline-offset-4"
              href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
            >
              Foodora
            </a>{" "}
            og{" "}
            <a
              className="text-[#4CB2E1] hover:underline underline-offset-4"
              href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill"
            >
              Wolt
            </a>
            .
          </p>
        </div>
        <div className="flex justify-center img_svg mt-6 sm:mt-0 lg:mt-10">
          <a href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill">
            <Image
              className="object-cover w-[100px] sm:w-[100px]"
              src={wolt}
              alt="Wolt"
            />
          </a>
          <a href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE">
            <Image
              className="object-cover w-[100px] sm:w-[100px]"
              src={foodora}
              alt="Foodora"
            />
          </a>
        </div>
      </div>
    </div>
  );
}