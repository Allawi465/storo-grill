import Image from 'next/image';
import foodora from '../../../../public/meny/Foodora.svg';
import wolt from '../../../../public/meny/Wolt.svg';
export default function OrderWith() {
  return (
    <section className="bg-[#262626] h-[380px]">
      <div className="gap-16 items-center h-full py-16 px-4 mx-auto md:grid md:grid-cols-2 lg:py-16 lg:px-6 max-w-6xl">
        <div className="font-light text-[#141414] sm:text-lg ml-3">
          <h2 className="mb-4 text-3xl sm:text-4xl tracking-tight font-bold text-white">
            Bestill din favorittmat nå!
          </h2>
          <p className="mb-4 text-white">
            Du kan enkelt bestille mat hos oss. Ring oss direkte{' '}
            <a className="underline" href="tel:46750757">
              46 75 07 57
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
        <div className="grid grid-cols-2 md:gap-4 md:mt-8">
          <a
            href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
            className="max-h-[100px] md:max-h-full"
          >
            <Image
              className="w-full rounded-lg max-h-[100px] md:max-h-full"
              src={foodora}
              alt="Foodora"
            />
          </a>
          <a
            href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill"
            className="max-h-[100px] md:max-h-full"
          >
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg max-h-[100px] md:max-h-full"
              src={wolt}
              alt="Wolt"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
