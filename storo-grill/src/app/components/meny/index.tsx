import React, { useEffect, useState, useRef } from 'react';

export default function MenuBtns() {
  const [activeLink, setActiveLink] = useState('');
  const containerRef = useRef<HTMLDivElement | null>(null);
  const linkRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  const sectionIds = [
    'pizza',
    'calozne',
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
    <section className="bg-white pt-3 pb-8" id="meny">
      <div
        className="overflow-x-auto bg-white text-center sticky top-0 scroll-x-meny shadow-md py-2"
        ref={containerRef}
      >
        <div className="h-14 pt-4 bg-white meny-btns mx-2">
          {sectionIds.map((sectionId) => (
            <a
              key={sectionId}
              href={`#${sectionId}`}
              ref={(el) => (linkRefs.current[sectionId] = el)}
              className={`text-gray-900 border border-white hover:border-gray-300 text-sm bg-white rounded-full sm:text-base font-medium px-5 py-2.5 text-center mr-3 ${
                activeLink === sectionId
                  ? 'text-blue-700 border border-blue-700'
                  : ''
              }`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </a>
          ))}
        </div>
      </div>
      <div className="bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto">
          <div id="pizza" className="pt-20">
            <h3 className="mx-2 text-3xl tracking-tight font-medium text-[#171717]">
              Pizza
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="pt-20" id="calozne">
            <h3 className="mx-2 my-6 text-3xl tracking-tight font-medium  text-[#171717]">
              Calozne
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="pt-20" id="grillretter">
            <h3 className="mx-2 text-3xl tracking-tight font-medium  text-[#171717]">
              Grillretter
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="pt-20" id="hamburger">
            <h3 className="mx-2 text-3xl tracking-tight font-medium  text-[#171717]">
              Hamburger
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="pt-20" id="barnemeny">
            <h3 className="mx-2 text-3xl tracking-tight font-medium  text-[#171717]">
              Barnemeny
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="pt-20" id="drikke">
            <h3 className="mx-2 text-3xl tracking-tight font-medium  text-[#171717]">
              Drikke
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 
      <div className="bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto pt-4">
          <div id="pizza" className="pt-20">
            <h3 className="mx-2 my-2 text-3xl tracking-tight font-medium  text-[#171717]">
              Pizza
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-4">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="mt-8 pt-20" id="calozne">
            <h3 className="mx-2 my-6 text-3xl tracking-tight font-medium  text-[#171717]">
              Calozne
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="mt-8 pt-20" id="grillretter">
            <h3 className="mx-2 my-6 text-3xl tracking-tight font-medium  text-[#171717]">
              Grillretter
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="mt-8 pt-20" id="hamburger">
            <h3 className="mx-2 my-6 text-3xl tracking-tight font-medium  text-[#171717]">
              Hamburger
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="mt-8 pt-20" id="barnemeny">
            <h3 className="mx-2 my-6 text-3xl tracking-tight font-medium  text-[#171717]">
              Barnemeny
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
          <div className="mt-8 pt-20" id="drikke">
            <h3 className="mx-2 my-6 text-3xl tracking-tight font-medium  text-[#171717]">
              Drikke
            </h3>
            <div className="mx-2 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 pt-6 gap-8">
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
              <div className="rounded border-gray-300 dark:border-gray-700 border-dashed border-2 h-24 mx-2"></div>
            </div>
          </div>
        </div>
      </div> */
