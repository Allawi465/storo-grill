import React, { useEffect, useState, useRef } from 'react';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import { pizza } from './json/pizza';
import { calzone } from './json/calzone';
import { grillretter } from './json/grillretter';
import { barnemeny } from './json/barnemeny';
import { drikke } from './json/drikke';
import { hamburger } from './json/hamburger';
import Allergi from './model/allergi';

export default function MenuBtns() {
  const [activeLink, setActiveLink] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const [showAllergi, setShowAllergi] = useState(false);
  const cancelButtonRef = useRef(null);

  // Function to toggle the Allergi component
  const toggleAllergi = () => {
    setShowAllergi(!showAllergi);
  };

  const sectionIds = [
    'pizza',
    'calzone',
    'grillretter',
    'hamburger',
    'barnemeny',
    'drikke',
  ];

  useEffect(() => {
    const handleScroll = () => {
      let activeLinkId = '';

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            activeLinkId = sectionId;
            break;
          }
        }
      }

      setActiveLink(activeLinkId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeLink && containerRef.current && linkRefs.current[activeLink]) {
      const link = linkRefs.current[activeLink];
      const container = containerRef.current;
      const linkRect = link?.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      if (linkRect) {
        const left = linkRect.left ?? 0;
        const right = linkRect.right ?? 0;

        if (left < containerRect.left || right > containerRect.right) {
          container.scrollLeft =
            left - container.offsetWidth / 2 + (linkRect?.width ?? 0) / 2;
        }
      }
      {
        container.scrollLeft =
          (link?.offsetLeft ?? 0) -
          container.offsetWidth / 2 +
          (link?.offsetWidth ?? 0) / 2;
      }
    }
  }, [activeLink]);

  return (
    <section className="bg-[#262626] pt-8" id="meny">
      <Allergi
        isOpen={showAllergi}
        setIsOpen={setShowAllergi}
        cancelButtonRef={cancelButtonRef}
      />
      <div
        className="overflow-x-auto bg-[#262626] text-center sticky top-0 scroll-x-meny py-4"
        ref={containerRef}
      >
        <div className="my-2 bg-bg-[#262626] mx-2">
          {sectionIds.map((sectionId) => (
            <a
              key={sectionId}
              href={`#${sectionId}`}
              ref={(el) => (linkRefs.current[sectionId] = el)}
              className={`text-white border border-transparent hover:border-[#737373] text-sm bg-[#262626]  rounded-full sm:text-md font-medium px-5 py-2.5 text-center mr-4 ${
                activeLink === sectionId ? 'active' : ''
              }`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-[#262626]">
        <div className="max-w-6xl mx-auto">
          <div id="pizza" className="pt-[68px]">
            <h3 className="original-text-shadow text-2xl sm:text-3xl mx-2 sm:mx-auto tracking-tight">
              Pizza
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-5">
              {pizza.map((pizza, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h4 className="mr-1 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                      {pizza.name}
                    </h4>
                    <button
                      className="text-[#FEFD92] text-lg cursor-pointer hover:underline underline-offset-4 text-ellipsis overflow-hidden whitespace-nowrap"
                      onClick={toggleAllergi}
                    >
                      ({pizza.allergens.join(',')})
                    </button>
                  </div>

                  <p className="ml-1 mt-1 text-gray-200 text-sm text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
                    {pizza.ingredients}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[68px]" id="calzone">
            <h3 className="original-text-shadow text-2xl sm:text-3xl mx-2 sm:mx-auto tracking-tight">
              Calzone
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-5">
              {calzone.map((calzone, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h4 className="mr-1 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                      {calzone.name}
                    </h4>
                    <button
                      className="text-[#FEFD92] text-lg cursor-pointer hover:underline underline-offset-4 text-ellipsis overflow-hidden whitespace-nowrap"
                      onClick={toggleAllergi}
                    >
                      ({calzone.allergens.join(',')})
                    </button>
                  </div>
                  <p className="ml-1 mt-1 text-gray-200 text-sm text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
                    {calzone.ingredients}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[68px]" id="grillretter">
            <h3 className="original-text-shadow text-2xl sm:text-3xl mx-2 sm:mx-auto tracking-tight ">
              Grillretter
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-5">
              {grillretter.map((grillretter, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h4 className="mr-1 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                      {grillretter.name}
                    </h4>
                    <button
                      className="text-[#FEFD92] text-lg cursor-pointer hover:underline underline-offset-4 text-ellipsis overflow-hidden whitespace-nowrap"
                      onClick={toggleAllergi}
                    >
                      ({grillretter.allergens})
                    </button>
                  </div>
                  {grillretter.ingredients && (
                    <p className="ml-1 mt-1 text-gray-200 text-sm text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
                      {grillretter.ingredients}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[68px]" id="hamburger">
            <h3 className="original-text-shadow text-2xl sm:text-3xl mx-2 sm:mx-auto tracking-tight">
              Hamburger
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-5">
              {hamburger.map((burger, index) => (
                <div className="rounded bg-[#404040] h-24 p-2 " key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h4 className="mr-1 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                      {burger.name}
                    </h4>
                    <button
                      className="text-[#FEFD92] text-lg cursor-pointer hover:underline underline-offset-4 text-ellipsis overflow-hidden whitespace-nowrap"
                      onClick={toggleAllergi}
                    >
                      ({burger.Allergens})
                    </button>
                  </div>
                  {burger.Ingredients && (
                    <p className="ml-1 mt-1 text-gray-200 text-sm text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
                      {burger.Ingredients}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[68px]" id="barnemeny">
            <h3 className="original-text-shadow text-2xl sm:text-3xl mx-2 sm:mx-auto tracking-tight">
              Barnemeny
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-5">
              {barnemeny.map((barnemeny, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h4 className="mr-1 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                      {barnemeny.name}
                    </h4>
                    <button
                      className="text-[#FEFD92] text-lg cursor-pointer hover:underline underline-offset-4 text-ellipsis overflow-hidden whitespace-nowrap"
                      onClick={toggleAllergi}
                    >
                      ({barnemeny.allergens})
                    </button>
                  </div>
                  {barnemeny.ingredients && (
                    <p className="ml-1 mt-1 text-gray-200 text-sm text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
                      {barnemeny.ingredients}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-[68px]" id="drikke">
            <h3 className="original-text-shadow text-2xl sm:text-3xl mx-2 sm:mx-auto tracking-tight">
              Drikke
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-5">
              {drikke.map((drikke, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h4 className="mr-1 text-lg text-ellipsis overflow-hidden whitespace-nowrap">
                      {drikke.name}
                    </h4>
                  </div>
                  {drikke.size && (
                    <p className="ml-1 mt-1 text-gray-200 text-sm text-ellipsis overflow-hidden whitespace-nowrap sm:whitespace-normal sm:overflow-visible">
                      Str: {drikke.size}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export const getStaticProps: GetStaticProps =
  async ({}: GetStaticPropsContext) => {
    return {
      props: {
        pizzaData: pizza, // Include the pizza data
        calzoneData: calzone, // Include the calzone data
        drikkeData: drikke, // Include the drikke data
        grillretterData: grillretter, // Include the grillretter data
        hamburgerData: hamburger, // Include the hamburger data
      },
    };
  };
