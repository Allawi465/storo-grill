import React, { useEffect, useState, useRef } from 'react';
import { pizza } from './json/pizza';
import { calzone } from './json/calzone';
import { grillretter } from './json/grillretter';
import { barnemeny } from './json/barnemeny';
import { drikke } from './json/drikke';
import { hamburger } from './json/hamburger';

export default function MenuBtns() {
  const [activeLink, setActiveLink] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

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
    handleScroll(); // Initialize activeLink on load

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
              className={`text-white border border-transparent hover:border-[#737373] text-sm bg-[#262626]  rounded-full sm:text-lg font-medium px-5 py-2.5 text-center mr-4 ${
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
          <div id="pizza" className="pt-20">
            <h3 className="original-text-shadow mx-2 tracking-tight">Pizza</h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              {pizza.map((pizza, index) => (
                <div className="rounded bg-[#404040] h-24 p-2 " key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h1 className="mr-1 text-lg">{pizza.name}</h1>
                    <span className=" text-[#FEFD92] text-lg">
                      ({pizza.allergens.join(',')})
                    </span>
                  </div>
                  <p className="ml-1 text-white text-sm">
                    {pizza.ingredients}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20" id="calzone">
            <h3 className="original-text-shadow mx-2 tracking-tight">
              Calzone
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              {calzone.map((calzone, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h1 className="mr-1 text-lg">{calzone.name}</h1>
                    <span className=" text-[#FEFD92] text-lg">
                      ({calzone.allergens.join(',')})
                    </span>
                  </div>
                  <p className="ml-1 text-white text-sm">
                    {calzone.ingredients}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20" id="grillretter">
            <h3 className="original-text-shadow mx-2 tracking-tight">
              Grillretter
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              {grillretter.map((grillretter, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h1 className="mr-1 text-lg">{grillretter.name}</h1>
                    <span className=" text-[#FEFD92] text-lg">
                      ({grillretter.allergens})
                    </span>
                  </div>
                  {grillretter.ingredients && (
                    <p className="ml-1 text-white text-sm">
                      {grillretter.ingredients}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20" id="hamburger">
            <h3 className="original-text-shadow mx-2 tracking-tight">
              Hamburger
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              {hamburger.map((burger, index) => (
                <div className="rounded bg-[#404040] h-24 p-2 " key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h1 className="mr-1 text-lg">{burger.name}</h1>
                    <span className=" text-[#FEFD92] text-lg">
                      ({burger.Allergens})
                    </span>
                  </div>
                  {burger.Ingredients && (
                    <p className="ml-1 text-white text-sm">
                      {burger.Ingredients}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-20" id="barnemeny">
            <h3 className="original-text-shadow mx-2 tracking-tight">
              Barnemeny
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              {barnemeny.map((barnemeny, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h1 className="mr-1 text-lg">{barnemeny.name}</h1>
                    <span className=" text-[#FEFD92] text-lg">
                      ({barnemeny.allergens})
                    </span>
                  </div>
                  {barnemeny.ingredients && (
                    <p className="ml-1 text-white text-sm">
                      {barnemeny.ingredients}.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="py-20" id="drikke">
            <h3 className="original-text-shadow mx-2 tracking-tight">Drikke</h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              {drikke.map((drikke, index) => (
                <div className="rounded bg-[#404040] h-24 p-2" key={index}>
                  <div className="flex text-white">
                    <span className="mr-1 text-lg">{index + 1}.</span>
                    <h1 className="mr-1 text-lg">{drikke.name}</h1>
                  </div>
                  {drikke.size && (
                    <p className="ml-1 text-white text-sm">
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
