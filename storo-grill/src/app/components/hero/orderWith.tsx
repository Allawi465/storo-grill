import Image from 'next/image';
import foodora from '../../../../public/foodora.png';
import wolt from '../../../../public/Wolt.png';
export default function OrderWith() {
  return (
    <div className="bg-[#9b98a1] h-3/6 overflow-hidden order_with">
      <div className="gap-16 items-center h-full py-12 px-4 mx-auto sm:grid sm:grid-cols-2 lg:px-6 max-w-7xl">
        <div className="font-light text-[#141414] sm:text-lg ml-3">
          <h2 className="order_with_h2 text-4xl font-bold tracking-tight leading-none lg:text-6xl text-[262626]">
            Bestill din favorittmat nå!
          </h2>
          <p className="my-4 text-black text-xl lg:text-[22px] sm:my-6">
            Du kan enkelt bestille mat hos oss. Ring oss direkte{' '}
            <a className="underline" href="tel:46750757">
              +47 46 75 07 57
            </a>
            , eller benytt deg av våre leveringstjenester med{' '}
            <a
              className="underline"
              href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
            >
              Foodora
            </a>{' '}
            og{' '}
            <a
              className="underline"
              href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill"
            >
              Wolt
            </a>
            .
          </p>
        </div>
        <div className="flex sm:justify-center img_svg lg:mt-10">
          <a
            href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill"
            className=""
          >
            <Image
              className="object-cover w-[150px] sm:w-[190px]"
              src={wolt}
              alt="Wolt"
            />
          </a>
          <a
            href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
            className=""
          >
            <Image
              className="object-cover w-[90px] sm:w-[120px] mt-2"
              src={foodora}
              alt="Foodora"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
