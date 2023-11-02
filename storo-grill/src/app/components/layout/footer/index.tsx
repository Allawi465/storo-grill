import { LuPhoneCall } from 'react-icons/lu';
import { FiMapPin } from 'react-icons/fi';
import { AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="bg-[#262626]">
      <div className="relative overflow-hidden py-16 sm:py-9 lg:py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <div className="max-w-xl-2 lg:max-w-lg">
              <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                Links
              </h3>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#meny" className=" hover:underline">
                    Meny
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://wolt.com/nb/nor/oslo/restaurant/storo-grill"
                    className="hover:underline"
                  >
                    Bestill med Wolt
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.foodora.no/restaurant/fbr5/storo-grill-and-cafe?gclid=CjwKCAjwo9unBhBTEiwAipC11zsdPbhcFFp6Nijs3H6ZShpx2fhvdvpR2KDCYSwUbJlUceL9PJMMZBoCuaoQAvD_BwE"
                    className="hover:underline"
                  >
                    Bestill med Foodora
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.google.com/search?hl=no-NO&gl=no&q=Storo+Grill+%26+Cafe,+Vitaminveien+14,+0483+Oslo&ludocid=13992137949518365651&lsig=AB86z5WgZl8zZJfA7RchpsSAgB8W&hl=no&gl=NO#lrd=0x46416f6cb86bd1b7:0xc22e0f54e14e03d3,1"
                    className="hover:underline"
                  >
                    Anmeldelser
                  </a>
                </li>
              </ul>
            </div>
            <div className="max-w-xl lg:max-w-lg">
              <h3 className="mb-6 text-sm font-semibold  uppercase text-white">
                Kontakt oss
              </h3>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="tel:46750757"
                    className=" hover:underline flex items-center"
                  >
                    <LuPhoneCall className="mr-2 " /> +47 46 75 07 57
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.google.com/maps?ll=59.946442,10.772675&z=16&t=m&hl=no&gl=NO&mapclient=embed&cid=13992137949518365651"
                    className=" hover:underline flex items-center"
                  >
                    <FiMapPin className="mr-2 " /> Vitaminveien 14, 0483 Oslo
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://www.facebook.com/p/Storogrill-100076404815236/"
                    className=" hover:underline flex items-center"
                  >
                    <AiOutlineFacebook className="mr-2 " /> Storogrill
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://instagram.com/storogrill?igshid=OGQ5ZDc2ODk2ZA=="
                    className=" hover:underline flex items-center"
                  >
                    <AiOutlineInstagram className="mr-2" /> Storogrill
                  </a>
                </li>
              </ul>
            </div>
            <dl className="">
              <div className="flex flex-col items-start">
                <h3 className="mb-6 text-sm font-semibold  uppercase text-white">
                  Åpningstider
                </h3>
                <dd className="mt-2 leading-7 text-gray-400">
                  Man - fre: 10.00 - 23:00
                </dd>
                <dd className="mt-2 leading-7 text-gray-400">
                  Lør - søn: 10.00 - 23:00
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <hr className="my-6 sm:mx-auto border-gray-700" />
      <div className="max-w-6xl mx-auto">
        <span className="block text-sm text-center text-white mb-1">
          © 2021 - {new Date().getFullYear()} <span>STORO GRILL</span> utvilket
          av{' '}
          <a className="hover:underline  underline-offset-4 cursor-pointer">
            Ohana
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
